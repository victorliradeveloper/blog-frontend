import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ReadingProgressBarContainer } from './ReadingProgressBar.styled';

const PROGRESS_UPDATE_THRESHOLD = 0.1;
const CONTENT_CHECK_DELAY = 50;
const MAX_CONTENT_CHECK_ATTEMPTS = 20;
const POST_CONTENT_READY_DELAY = 100;
const POST_ROUTE_CHANGE_DELAY = 300;
const INITIAL_FRAMES_TO_WAIT = 2;

const calculateScrollProgress = (): number => {
  if (typeof window === 'undefined') return 0;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const totalScrollableHeight = documentHeight - windowHeight;

  if (totalScrollableHeight <= 0) return 0;

  const progress = (scrollTop / totalScrollableHeight) * 100;
  return Math.min(100, Math.max(0, progress));
};

const isContentReady = (): boolean => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  const body = document.body;
  const html = document.documentElement;

  return !!(
    body &&
    html &&
    html.scrollHeight > window.innerHeight &&
    body.scrollHeight > 0 &&
    html.offsetHeight > 0
  );
};

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const lastProgress = useRef(0);
  const isTracking = useRef(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contentReadyCleanupRef = useRef<(() => void) | null>(null);

  const updateScrollProgress = useCallback(() => {
    if (typeof window === 'undefined' || !isTracking.current) return;

    const currentProgress = calculateScrollProgress();

    if (Math.abs(currentProgress - lastProgress.current) > PROGRESS_UPDATE_THRESHOLD) {
      lastProgress.current = currentProgress;
      setScrollProgress(currentProgress);
    }

    rafId.current = null;
  }, []);

  const handleScroll = useCallback(() => {
    if (rafId.current === null && isTracking.current) {
      rafId.current = requestAnimationFrame(updateScrollProgress);
    }
  }, [updateScrollProgress]);

  const handleResize = useCallback(() => {
    if (rafId.current === null && isTracking.current) {
      rafId.current = requestAnimationFrame(updateScrollProgress);
    }
  }, [updateScrollProgress]);

  const attachEventListeners = useCallback(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
  }, [handleScroll, handleResize]);

  const detachEventListeners = useCallback(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  }, [handleScroll, handleResize]);

  const resetTrackingState = useCallback(() => {
    isTracking.current = false;
    setScrollProgress(0);
    lastProgress.current = 0;
  }, []);

  const cancelPendingUpdate = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (contentReadyCleanupRef.current) {
      contentReadyCleanupRef.current();
      contentReadyCleanupRef.current = null;
    }
  }, []);

  const waitForContentReady = useCallback(
    (onReady: () => void): (() => void) => {
      let attempts = 0;
      let checkTimeout: NodeJS.Timeout | null = null;
      let rafId: number | null = null;

      const checkReady = () => {
        attempts++;

        if (isContentReady() || attempts >= MAX_CONTENT_CHECK_ATTEMPTS) {
          checkTimeout = setTimeout(() => {
            onReady();
          }, POST_CONTENT_READY_DELAY);
        } else {
          checkTimeout = setTimeout(checkReady, CONTENT_CHECK_DELAY);
        }
      };

      let framesWaited = 0;
      const waitFrames = () => {
        framesWaited++;
        if (framesWaited < INITIAL_FRAMES_TO_WAIT) {
          rafId = requestAnimationFrame(waitFrames);
        } else {
          checkReady();
        }
      };

      rafId = requestAnimationFrame(waitFrames);

      return () => {
        if (checkTimeout) {
          clearTimeout(checkTimeout);
        }
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
      };
    },
    []
  );

  const startTracking = useCallback(() => {
    resetTrackingState();
    detachEventListeners();
    cancelPendingUpdate();

    if (contentReadyCleanupRef.current) {
      contentReadyCleanupRef.current();
      contentReadyCleanupRef.current = null;
    }

    contentReadyCleanupRef.current = waitForContentReady(() => {
      isTracking.current = true;
      attachEventListeners();
      updateScrollProgress();
      contentReadyCleanupRef.current = null;
    });
  }, [resetTrackingState, detachEventListeners, cancelPendingUpdate, waitForContentReady, attachEventListeners, updateScrollProgress]);

  const handleRouteChangeStart = useCallback(() => {
    resetTrackingState();
    cancelPendingUpdate();
    detachEventListeners();
  }, [resetTrackingState, cancelPendingUpdate, detachEventListeners]);

  const handleRouteChangeComplete = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      startTracking();
      timeoutRef.current = null;
    }, POST_ROUTE_CHANGE_DELAY);
  }, [startTracking]);

  useEffect(() => {
    startTracking();

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      resetTrackingState();
      detachEventListeners();
      cancelPendingUpdate();
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, startTracking, handleRouteChangeStart, handleRouteChangeComplete, resetTrackingState, detachEventListeners, cancelPendingUpdate]);

  return (
    <ReadingProgressBarContainer>
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-label={`Reading progress: ${Math.round(scrollProgress)}%`}
      />
    </ReadingProgressBarContainer>
  );
}

