const Brand = () => {
  return (
    <div className="default-section">
          <div className="global-wrapper">
            <div className="global-headline-div">
              <div className="global-headline-l">100 <span className="global-headline-s is-left-aligned is-bold">Mio. €</span></div>
              <div className="global-subline-div _1">
                <div className="max-width _20">
                  <p className="copytext is-bold">E-Commerce Umsatz pro Jahr mit Google für Unternehmen wie</p>
                </div>
              </div>
            </div>
            <div className="global-content-div">
              {/* Desktop/Tablet View */}
              <div className="vw-desktop-tablet">
                <div className="cms w-dyn-list">
                  <div role="list" className="grid _5 w-dyn-items">
                    {/* Client logos would go here - repeated for each client */}
                    <div role="listitem" className="cms-item w-dyn-item">
                      <div className="case-item-small">
                        <div className="section-layer-div">
                          <div className="section-layer-1 is-relative">
                            <img src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small.png" loading="lazy" alt="Purelei" sizes="100vw" srcSet="https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small.png 592w" className="logo-cms turn-black" />
                          </div>
                          <div className="section-layer-2 is-absolute is-bottom-aligned">
                            <a href="#" data-w-id="a16e2d83-2f19-e0cb-bef3-feeecd3df949" className="lightbox-btn w-inline-block w-condition-invisible w-dyn-bind-empty w-lightbox">
                              <div className="copytext-small is-white">Video ansehen</div>
                              <script type="application/json" className="w-json">
                                {JSON.stringify({ items: [], group: "" })}
                              </script>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* More client logos would follow the same pattern */}
                  </div>
                </div>
              </div>
              
              {/* Mobile View */}
              <div className="vw-mobile">
                <div className="cms w-dyn-list">
                  <div role="list" className="grid _5 w-dyn-items">
                    {/* Mobile client logos would go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Brand
