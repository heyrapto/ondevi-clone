import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Team = () => {
    

    gsap.from(".cms-item", {
        scrollTrigger: {
            trigger: ".grid",
            start: "top 70%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.9,
        filter: "blur(5px)", // Startwert
        duration: 0.6,
        stagger: {
            amount: 0.6,
            from: "start"
        },
        ease: "power2.out"
    });
    
  return (
    <div className="default-section">
          <div className="vw-desktop">
            <div data-w-id="5fbf0ed5-cc6e-91bd-66bb-0688207a21a3" className="animation-section">
              <div className="animation-section-inner">
                <div className="section-layer-div">
                  <div className="section-layer-1 is-relative">
                    <div className="max-width _90">
                      <div data-loading="lazy" data-preserve-aspect-ratio="xMidYMid slice" data-is-ix2-target="1" className="lottie" data-w-id="3d32f347-faca-63d9-5a57-93ec78c2c77f" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/68405e9ce713fe96af235272_Ondevi%20Team%20Section%201080%2060fps_2.lottie" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="canvas" data-default-duration="0" data-duration="2.3833333333333333"></div>
                    </div>
                  </div>
                  <div className="section-layer-2 is-absolute">
                    <div className="global-wrapper h-100">
                      <div className="align-vertically h-100 is-left-aligned">
                        <div className="max-width _30">
                          <div className="global-headline-s is-left-aligned is-grey">Wir glauben, dass <span className="is-black">Wachstum gemeinsam schneller</span> gelingt als allein</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-layer-3 is-absolute">
                    <div className="global-wrapper h-100">
                      <div className="align-vertically h-100">
                        <div className="max-width _40">
                          <h2 className="global-headline-s">Dein <span className="is-blue">Plug &amp; Play Team</span> als Wachstumsbeschleuniger</h2>
                        </div>
                        <div className="global-subline-div _1">
                          <div className="max-width _35">
                            <p className="copytext">Wir vereinen seniorige Spezialisten in einem interdisziplinären Growth Team, das sich reibungslos und ohne Koordinationsaufwand in deine Strukturen integriert.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Team Section */}
          <div className="vw-mobile">
            <div className="default-section is-light-grey custom-1">
              <div className="section-layer-div">
                <div className="section-layer-1 is-relative">
                  <div className="parallax-img-div h-100">
                    <img src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/68276dcd9656abfb9a5267df_Group%2015489.png" loading="lazy" sizes="(max-width: 991px) 100vw, 785.9942626953125px" srcSet="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/68276dcd9656abfb9a5267df_Group%2015489-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/68276dcd9656abfb9a5267df_Group%2015489.png 786w" alt="" className="parallax-img" />
                  </div>
                </div>
                <div className="section-layer-2 is-absolute">
                  <div className="global-wrapper h-100">
                    <div className="align-vertically">
                      <h2 className="global-headline-s is-grey">Wir glauben, dass <span className="is-black">Wachstum gemeinsam schneller </span>gelingt als allein</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="default-section is-light-grey overflow-none">
              <div className="global-wrapper">
                <div className="global-headline-div">
                  <h2 className="global-headline-s">Dein <span className="is-blue">Plug &amp; Play</span> Team als Wachstums-beschleuniger</h2>
                  <div className="global-subline-div _1">
                    <p className="copytext">Wir vereinen seniorige Spezialisten in einem interdisziplinären Growth Team, das sich reibungslos und ohne Koordinationsaufwand in deine Strukturen integriert.</p>
                  </div>
                </div>
                <div className="global-content-div">
                  <div className="swiper swiper1 w-dyn-list">
                    <div role="list" className="swiper-wrapper w-dyn-items">
                      {/* Team member cards would go here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Team
