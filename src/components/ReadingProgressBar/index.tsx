import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { ReadingProgressBarContainer } from './ReadingProgressBar.styled';

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const lastProgress = useRef(0);
  const isTracking = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window === 'undefined' || !isTracking.current) return;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = totalScrollableHeight > 0 
        ? (scrollTop / totalScrollableHeight) * 100 
        : 0;
      
      const clampedProgress = Math.min(100, Math.max(0, progress));
      
      // Só atualiza se houver mudança significativa (reduz re-renders)
      if (Math.abs(clampedProgress - lastProgress.current) > 0.1) {
        lastProgress.current = clampedProgress;
        setScrollProgress(clampedProgress);
      }
      
      rafId.current = null;
    };

    const handleScroll = () => {
      if (rafId.current === null && isTracking.current) {
        rafId.current = requestAnimationFrame(updateScrollProgress);
      }
    };

    const handleResize = () => {
      if (rafId.current === null && isTracking.current) {
        rafId.current = requestAnimationFrame(updateScrollProgress);
      }
    };

    // Aguarda o conteúdo estar totalmente renderizado
    const startTracking = () => {
      isTracking.current = false;
      setScrollProgress(0);
      lastProgress.current = 0;
      
      let attempts = 0;
      const maxAttempts = 20; // Máximo de 1 segundo (20 * 50ms)
      
      const checkReady = () => {
        attempts++;
        const body = document.body;
        const html = document.documentElement;
        const hasContent = body && html && 
          html.scrollHeight > window.innerHeight && 
          body.scrollHeight > 0 &&
          html.offsetHeight > 0;
        
        if (hasContent || attempts >= maxAttempts) {
          // Aguarda mais um pouco para garantir que imagens e conteúdo dinâmico carregaram
          setTimeout(() => {
            isTracking.current = true;
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleResize, { passive: true });
            updateScrollProgress();
          }, 100);
        } else {
          setTimeout(checkReady, 50);
        }
      };
      
      // Aguarda alguns frames antes de verificar
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          checkReady();
        });
      });
    };

    startTracking();

    const handleRouteChangeStart = () => {
      isTracking.current = false;
      setScrollProgress(0);
      lastProgress.current = 0;
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };

    const handleRouteChangeComplete = () => {
      // Aguarda mais tempo para garantir que o Next.js terminou de renderizar
      setTimeout(() => {
        startTracking();
      }, 300);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      isTracking.current = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [router.events]);

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

