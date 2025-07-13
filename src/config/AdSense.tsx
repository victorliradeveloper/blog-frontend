import Script from 'next/script';

type AdSenseTypes = {
  pId: string;
};

const AdSense = function (props: AdSenseTypes) {
  const { pId } = props;
  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
};

export default AdSense;
