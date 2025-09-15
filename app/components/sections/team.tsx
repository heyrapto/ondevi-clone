import { useEffect } from "react";
import { gsap } from "gsap"

const teamMembers = [
  {
    id: 1,
    name: "Nikola Montenbruck",
    position: "CRM-Manager",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123640a0e70feda6195e7f_Ondevi-Nikola-3854.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123640a0e70feda6195e7f_Ondevi-Nikola-3854-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123640a0e70feda6195e7f_Ondevi-Nikola-3854-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123640a0e70feda6195e7f_Ondevi-Nikola-3854-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123640a0e70feda6195e7f_Ondevi-Nikola-3854-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123640a0e70feda6195e7f_Ondevi-Nikola-3854.jpg 1667w"
  },
  {
    id: 2,
    name: "Tuan Hoang",
    position: "Tracking-Experte",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681236689333d86a1a4c3dcc_Ondevi-Tuan-3970.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681236689333d86a1a4c3dcc_Ondevi-Tuan-3970-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681236689333d86a1a4c3dcc_Ondevi-Tuan-3970-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681236689333d86a1a4c3dcc_Ondevi-Tuan-3970-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681236689333d86a1a4c3dcc_Ondevi-Tuan-3970-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681236689333d86a1a4c3dcc_Ondevi-Tuan-3970.jpg 1667w"
  },
  {
    id: 3,
    name: "Patrick Groeschner",
    position: "Teamlead-SEA",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68415b39e510b3d384b1e8b8_patrick.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68415b39e510b3d384b1e8b8_patrick-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68415b39e510b3d384b1e8b8_patrick-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68415b39e510b3d384b1e8b8_patrick-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68415b39e510b3d384b1e8b8_patrick-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68415b39e510b3d384b1e8b8_patrick.jpg 1667w"
  },
  {
    id: 4,
    name: "Max Racky",
    position: "Senior SEA-Manager",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6812362c084edd87ea9f27a2_Ondevi-Max-3631.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6812362c084edd87ea9f27a2_Ondevi-Max-3631-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6812362c084edd87ea9f27a2_Ondevi-Max-3631-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6812362c084edd87ea9f27a2_Ondevi-Max-3631-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6812362c084edd87ea9f27a2_Ondevi-Max-3631-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6812362c084edd87ea9f27a2_Ondevi-Max-3631.jpg 1667w"
  },
  {
    id: 5,
    name: "Heike Schmidt",
    position: "Creative Strategist",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681235c152cc8a524c15a0f3_Ondevi-Heike-3905.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681235c152cc8a524c15a0f3_Ondevi-Heike-3905-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681235c152cc8a524c15a0f3_Ondevi-Heike-3905-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681235c152cc8a524c15a0f3_Ondevi-Heike-3905-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681235c152cc8a524c15a0f3_Ondevi-Heike-3905-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/681235c152cc8a524c15a0f3_Ondevi-Heike-3905.jpg 1667w"
  },
  {
    id: 6,
    name: "Manuel Schmidt",
    position: "Content-Editor",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123615c9918ffb0f262f8e_Ondevi-Manuel_S-3838.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123615c9918ffb0f262f8e_Ondevi-Manuel_S-3838-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123615c9918ffb0f262f8e_Ondevi-Manuel_S-3838-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123615c9918ffb0f262f8e_Ondevi-Manuel_S-3838-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123615c9918ffb0f262f8e_Ondevi-Manuel_S-3838-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68123615c9918ffb0f262f8e_Ondevi-Manuel_S-3838.jpg 1667w"
  }
];

const Team = () => {

  return (
    <div className="default-section">
      <div className="vw-desktop">
        <div data-w-id="5fbf0ed5-cc6e-91bd-66bb-0688207a21a3" className="animation-section">
          <div className="animation-section-inner">
            <div className="section-layer-div">
              <div className="section-layer-1 is-relative">
                <div className="max-width _90">
                  <div data-loading="lazy" data-preserve-aspect-ratio="xMidYMid slice" data-is-ix2-target="1" className="lottie" data-w-id="3d32f347-faca-63d9-5a57-93ec78c2c77f" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/68405e9ce713fe96af235272_Ondevi%20Team%20Section%201080%2060fps_2.lottie" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="canvas" data-default-duration="0" data-duration="0" data-default-src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/68405e9ce713fe96af235272_Ondevi%20Team%20Section%201080%2060fps_2.lottie" style={{ overflow: "hidden" }} data-state="playing"><canvas width="2400" height="1375" style={{ width: "100%", height: "100%", transformOrigin: "0px 0px 0px", contentVisibility: "visible" }}></canvas></div>
                </div>
              </div>
              <div className="section-layer-2 is-absolute" style={{ willChange: "opacity", opacity: 0 }}>
                <div className="global-wrapper h-100">
                  <div className="align-vertically h-100 is-left-aligned">
                    <div className="max-width _30">
                      <div className="global-headline-s is-left-aligned is-grey">Wir glauben, dass <span className="is-black">Wachstum gemeinsam schneller</span> gelingt als allein</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-layer-3 is-absolute" style={{ willChange: "opacity", opacity: 0.5377 }}>
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
                  {teamMembers.map((member) => (
                    <div key={member.id} role="listitem" className="swiper-slide _4x w-dyn-item">
                      <div className="cms-item_team">
                        <div className="section-layer-div">
                          <div className="section-layer-1 is-relative">
                            <img
                              src={member.image}
                              loading="lazy"
                              alt={member.name}
                              sizes="100vw"
                              srcSet={member.imageSrcSet || undefined}
                              className="default-img h-100"
                            />
                          </div>
                          <div className="section-layer-2 is-absolute is-bottom-aligned">
                            <div className="padding _2">
                              <div className="align-vertically is-left-aligned">
                                <div className="global-headline-xxs is-left-aligned is-white">{member.name}</div>
                                <div className="global-subline-div _025 is-left-aligned">
                                  <div className="copytext is-left-aligned is-white">{member.position}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  {teamMembers.map((_, index) => (
                    <span
                      key={index}
                      className={`swiper-pagination-bullet ${index === 0 ? 'swiper-pagination-bullet-active' : ''}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={index === 0 ? 'true' : undefined}
                    />
                  ))}
                </div>
                <div className="swiper-arrow button-prev" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-546309509b0bf5ef"></div>
                <div className="swiper-arrow button-next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-546309509b0bf5ef"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
