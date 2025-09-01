import Script from 'next/script';

// type AdSenseTypes = {
//   pId?: string;
// };

const AdSense = function () {
  // Publisher ID: pub-3834333278222212
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  if (!publisherId) {
    console.warn('AdSense Publisher ID não configurado');
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onError={e => {
        console.error('Erro ao carregar AdSense:', e);
      }}
    />
  );
};

export default AdSense;
