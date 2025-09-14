const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-align-vertically">
            <div className="footer-row-1">
              <div className="footer-column _1st">
                <img loading="lazy" src="https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/680797fe17c908d6a6cc15bb_logo_light.svg" alt="" className="footer-logo" />
                <div className="copytext is-left-aligned is-white is-center-aligned-on-mobile">Unsere Vision ist es die Nr. 1 Google Ads Agentur für E-Commerce zu werden.</div>
              </div>
              <div className="footer-column _2nd">
                <div className="footer-link-list is-hidden">
                  <div className="footer-txt">Services</div>
                  <a href="#" className="footer-url">Service 1</a>
                  <a href="#" className="footer-url">Service 2</a>
                  <a href="#" className="footer-url">Service 3</a>
                </div>
                <div className="footer-link-list">
                  <div className="footer-txt">Unternehmen</div>
                  <a href="/referenzen" className="footer-url">Referenzen</a>
                  <a href="/ueber-uns" className="footer-url">Über uns</a>
                  <a href="/karriere" className="footer-url">Karriere</a>
                  <a href="/account-analyse" className="footer-url">Kontakt</a>
                </div>
                <div className="footer-link-list">
                  <div className="footer-txt">Social Media</div>
                  <a href="https://www.linkedin.com/company/ondevi/" target="_blank" rel="noopener noreferrer" className="footer-url">LinkedIn</a>
                  <a href="https://www.instagram.com/ondevi/" target="_blank" rel="noopener noreferrer" className="footer-url">Instagram</a>
                </div>
              </div>
              <div className="footer-column _3rd">
                <div className="line light"></div>
                <div className="global-subline-div _05">
                  <div className="footer-link-list custom-break">
                    {/* Footer links would go here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-row-2">
              <div className="footer-align-horizontally is-strechted is-vertically-aligned-on-mobile">
                <div className="footer-url">© 2025 | ondevi</div>
                <div className="footer-align-horizontally g-2 align-vertically-on-mobile">
                  <a href="/impressum" className="footer-url">Impressum</a>
                  <a href="/datenschutz" className="footer-url">Datenschutz</a>
                  <a href="/agb" className="footer-url">AGB</a>
                </div>
              </div>
            </div>
            <div className="embed w-embed w-script">
              <script type="text/javascript">
                {`
                  _linkedin_partner_id = "2478796";
                  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                `}
              </script>
              <script type="text/javascript">
                {`
                  (function(l) {
                    if (!l) {
                      window.lintrk = function(a, b) {
                        window.lintrk.q.push([a, b])
                      };
                      window.lintrk.q = []
                    }
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";
                    b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);
                  })(window.lintrk);
                `}
              </script>
              <noscript>
                <img height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=2478796&fmt=gif" />
              </noscript>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
