const caseStudies = [
  {
    id: 1,
    company: "Beefbandits",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68403eaf04435e896bf14440_beefbanits-Logo_Small.png",
    logoSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68403eaf04435e896bf14440_beefbanits-Logo_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68403eaf04435e896bf14440_beefbanits-Logo_Small.png 800w",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68761112e65fdd10ec442109_Vorschau%20(6).png",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68761112e65fdd10ec442109_Vorschau%20(6)-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68761112e65fdd10ec442109_Vorschau%20(6).png 503w",
    metric: "55%",
    metricLabel: "mehr Bestellungen",
    link: "/referenzen/beefbandits"
  },
  {
    id: 2,
    company: "E-mobilio",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68403e5044f2093e0cd81c9e_emobilio-Logo_Small.png",
    logoSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68403e5044f2093e0cd81c9e_emobilio-Logo_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68403e5044f2093e0cd81c9e_emobilio-Logo_Small.png 800w",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo-p-500.jpg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo-p-800.jpg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo-p-1080.jpg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo-p-1600.jpg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo-p-2000.jpg 2000w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683f0f4ea032f6a144746abe_emobilio_StattVideo.jpg 3200w",
    metric: "56%",
    metricLabel: "ROAS Steigerung",
    link: "/referenzen/e-mobilio"
  },
  {
    id: 3,
    company: "Naturbummler",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840698dc8f27da23f6d54d7_logo_Naturbummler_Small.png",
    logoSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840698dc8f27da23f6d54d7_logo_Naturbummler_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840698dc8f27da23f6d54d7_logo_Naturbummler_Small.png 592w",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684069a350577e1d01f12f53_Vorschau%20(5).png",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684069a350577e1d01f12f53_Vorschau%20(5)-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684069a350577e1d01f12f53_Vorschau%20(5).png 503w",
    metric: "450K",
    metricLabel: "Mehrumsatz",
    link: "/referenzen/naturbummler"
  },
  {
    id: 4,
    company: "Alpensattel",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752.png",
    logoSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-800.png 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-1080.png 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-1600.png 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-2000.png 2000w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-2600.png 2600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-3200.png 3200w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752.png 3366w",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837.jpeg",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-500.jpeg 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-800.jpeg 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-2000.jpeg 2000w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-2600.jpeg 2600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837-p-3200.jpeg 3200w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808b0974b363a6d08ffabd3_pexels-tobiandchris-28005837.jpeg 6960w",
    metric: "750%",
    metricLabel: "Mehr Neukunden",
    link: "/referenzen/alpensattel"
  },
  {
    id: 5,
    company: "MemoryPC",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683e0eb0e2a4d60ef10b6b4e_memory.png",
    logoSrcSet: "",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68404065e713fe96af0fe654_Vorschau%20(1).png",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68404065e713fe96af0fe654_Vorschau%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68404065e713fe96af0fe654_Vorschau%20(1).png 503w",
    metric: "226%",
    metricLabel: "Steigerung ROAS",
    link: "/referenzen/memorypc"
  },
  {
    id: 6,
    company: "VMAX",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a90ad6c545889f7c5c13_vmax-logo%201.png",
    logoSrcSet: "",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68406588723c9d6fda993348_Vorschau%20(4).png",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68406588723c9d6fda993348_Vorschau%20(4)-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/68406588723c9d6fda993348_Vorschau%20(4).png 503w",
    metric: "100%",
    metricLabel: "YoY Umsatzwachstum",
    link: "/referenzen/vmax"
  },
  {
    id: 7,
    company: "Purelei",
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small.png",
    logoSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small.png 592w",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840401ee9754c356948b389_Vorschau.png",
    imageSrcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840401ee9754c356948b389_Vorschau-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840401ee9754c356948b389_Vorschau.png 503w",
    metric: "33%",
    metricLabel: "CM3 Steigerung MoM",
    link: "/referenzen/purelei"
  }
];

const Ads = () => {
  return (
    <div className="default-section is-light-grey overflow-none">
      <div className="global-wrapper">
        <div className="global-headline-div">
          <div className="max-width _35">
            <h2 className="global-headline-l">#nextlevel Google Ads Ergebnisse</h2>
            <div className="global-subline-div _1">
              <div className="max-width _35">
                <p className="copytext">Für exzellente Ergebnisse muss alles ineinandergreifen.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="global-content-div">
          <div className="swiper swiper1 w-dyn-list">
            <div role="list" className="swiper-wrapper w-dyn-items">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} role="listitem" className="swiper-slide w-dyn-item">
                  <a href={caseStudy.link} className="case-item-large w-inline-block">
                    <div className="section-layer-div">
                      <div className="section-layer-1">
                        <img 
                          src={caseStudy.image} 
                          loading="lazy" 
                          width="Auto" 
                          alt="Link to LinkedIn" 
                          sizes="100vw" 
                          srcSet={caseStudy.imageSrcSet || undefined}
                          className="default-img h-100" 
                        />
                      </div>
                      <div className="section-layer-2 is-absolute">
                        <div className="max-width _8">
                          <img 
                            src={caseStudy.logo} 
                            loading="lazy" 
                            alt="" 
                            sizes="100vw" 
                            srcSet={caseStudy.logoSrcSet || undefined}
                            className="default-img turn-white" 
                          />
                        </div>
                      </div>
                      <div className="section-layer-3">
                        <div className="padding _1 h-100 is-bottom-aligned">
                          <div className="box _w-100 is-blue">
                            <div className="padding _1">
                              <div className="align-horizontally g-1 _w-100">
                                <div className="align-vertically is-left-aligned">
                                  <div className="global-headline-s is-left-aligned is-white">{caseStudy.metric}</div>
                                  <div className="global-subline-div _025 is-left-aligned">
                                    <p className="copytext is-left-aligned is-white">{caseStudy.metricLabel}</p>
                                  </div>
                                </div>
                                <div className="arrow-div">
                                  <img 
                                    src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807c95db4a8d8267b47adc6_arrow_isolated.svg" 
                                    loading="lazy" 
                                    alt="" 
                                    className="default-img custom-1" 
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="global-subline-div _3">
            <a href="/referenzen" className="primary-btn is-black _w-auto pageload w-inline-block">
              <div className="btn-txt-div">
                <div className="btn-txt">Alle Cases ansehen</div>
                <div className="btn-txt">Alle Cases ansehen</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ads
