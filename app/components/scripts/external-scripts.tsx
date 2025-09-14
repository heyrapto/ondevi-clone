import { useEffect } from 'react';

export const ExternalScripts = () => {
  useEffect(() => {
    const loadScript = (src: string, async = true, defer = false) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.defer = defer;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadScript('https://www.googletagmanager.com/gtm.js?id=GTM-NTK84C6')
      .catch(console.error);

    loadScript('https://www.google.com/recaptcha/api.js')
      .catch(console.error);

    loadScript('https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js')
      .catch(console.error);

    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js')
      .then(() => {
        return loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js');
      })
      .then(() => {
        return loadScript('https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/67fd1a34d6b5b2269c4a361a_SplitText.txt');
      })
      .catch(console.error);

    // Load Swiper
    loadScript('https://unpkg.com/swiper@8/swiper-bundle.min.js')
      .then(() => {
        if (typeof window !== 'undefined' && (window as any).Swiper) {
          const swiper1 = new (window as any).Swiper(".swiper1", {
            direction: "horizontal",
            loop: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,
            mousewheel: {
              forceToAxis: true
            },
            speed: 400,
            breakpoints: {
              480: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              }
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev"
            },
            scrollbar: {
              el: ".swiper-scrollbar",
              draggable: true
            }
          });
        }
      })
      .catch(console.error);

    loadScript('https://cdn.jsdelivr.net/gh/athlonstudio/lottie-lazy-loader@latest/src/lottieLazyLoading.min.js')
      .catch(console.error);

  }, []);

  return null;
};
