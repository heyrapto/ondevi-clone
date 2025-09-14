import { useEffect } from 'react';

export const CookieConsentScripts = () => {
  useEffect(() => {
    const loadScript = (src: string, async = true) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js')
      .then(() => {
        return loadScript('https://cdn.jsdelivr.net/gh/digital-sparks/cookie-consent-boost@1/dist/index.js');
      })
      .catch(console.error);
  }, []);

  return null;
};
