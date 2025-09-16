import { useEffect } from 'react';

const LinkedInTracking = () => {
  useEffect(() => {
    // LinkedIn tracking code
    const _linkedin_partner_id = "2478796";
    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
    (window as any)._linkedin_data_partner_ids.push(_linkedin_partner_id);

    // LinkedIn insight script
    (function(l: any) {
      if (!l) {
        (window as any).lintrk = function(a: any, b: any) {
          (window as any).lintrk.q.push([a, b])
        };
        (window as any).lintrk.q = []
      }
      const s = document.getElementsByTagName("script")[0];
      const b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode?.insertBefore(b, s);
    })((window as any).lintrk);
  }, []);

  return (
    <noscript>
      <img height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=2478796&fmt=gif" />
    </noscript>
  );
};

const footerData = {
  company: {
    logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/680797fe17c908d6a6cc15bb_logo_light.svg",
    description: "Unsere Vision ist es die Nr. 1 Google Ads Agentur für E-Commerce zu werden."
  },
  linkSections: [
    {
      id: 1,
      title: "Services",
      links: [
        { text: "Service 1", href: "#" },
        { text: "Service 2", href: "#" },
        { text: "Service 3", href: "#" }
      ],
      isHidden: true
    },
    {
      id: 2,
      title: "Unternehmen",
      links: [
        { text: "Referenzen", href: "/referenzen" },
        { text: "Über uns", href: "/ueber-uns" },
        { text: "Karriere", href: "/karriere" },
        { text: "Kontakt", href: "/account-analyse" }
      ],
      isHidden: false
    },
    {
      id: 3,
      title: "Social Media",
      links: [
        { text: "LinkedIn", href: "https://www.linkedin.com/company/ondevi/", external: true },
        { text: "Instagram", href: "https://www.instagram.com/ondevi/", external: true }
      ],
      isHidden: false
    }
  ],
  locationLinks: [
    { text: "Google Ads Agentur München", href: "/google-ads-agentur-muenchen" },
    { text: "Google Ads Agentur Berlin", href: "/google-ads-agentur-berlin" },
    { text: "Google Ads Agentur Hamburg", href: "/google-ads-agentur-hamburg" },
    { text: "Google Ads Agentur Braunschweig", href: "/google-ads-agentur-braunschweig" },
    { text: "Google Ads Agentur Frankfurt", href: "/google-ads-agentur-frankfurt" },
    { text: "Google Ads Agentur Düsseldorf", href: "/google-ads-agentur-duesseldorf" },
    { text: "Google Ads Agentur Nürnberg", href: "/google-ads-agentur-nuernberg" },
    { text: "Google Ads Agentur Offenburg", href: "/google-ads-agentur-offenburg" },
    { text: "Google Ads Agentur Köln", href: "/google-ads-agentur-koeln" },
    { text: "Google Ads Agentur Stuttgart", href: "/google-ads-agentur-stuttgart" },
    { text: "Google Ads Agentur Bremen", href: "/google-ads-agentur-bremen" },
    { text: "Google Ads Agentur Heidelberg", href: "/google-ads-agentur-heidelberg" },
    { text: "Google Shopping Agentur", href: "/google-shopping-agentur" },
    { text: "Google-Ads-Agentur", href: "/google-ads-agentur" },
    { text: "SEA Agentur", href: "/sea-agentur" },
    { text: "Bing Agentur", href: "/bing-agentur" },
    { text: "Klaviyo Agentur", href: "/klaviyo-agentur" },
    { text: "E-Mail Marketing", href: "/email-marketing-agentur" },
    { text: "E-Commerce Spitzentreffen 16.09.2025", href: "https://ondevi.com/events/das-e-commerce-spitzentreffen", external: true }
  ],
  legalLinks: [
    { text: "Impressum", href: "/impressum" },
    { text: "Datenschutz", href: "/datenschutz" },
    { text: "AGB", href: "/agb" }
  ]
};

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-align-vertically">
            <div className="footer-row-1">
              <div className="footer-column _1st">
                <img loading="lazy" src={footerData.company.logo} alt="" className="footer-logo" />
                <div className="copytext is-left-aligned is-white is-center-aligned-on-mobile">{footerData.company.description}</div>
              </div>
              <div className="footer-column _2nd">
                {footerData.linkSections.map((section) => (
                  <div key={section.id} className={`footer-link-list ${section.isHidden ? 'is-hidden' : ''}`}>
                    <div className="footer-txt">{section.title}</div>
                    {section.links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.href} 
                        className="footer-url"
                        {...((link as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="footer-column _3rd">
                <div className="line light"></div>
                <div className="global-subline-div _05">
                  <div className="footer-link-list custom-break">
                    {footerData.locationLinks.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.href} 
                        className="footer-url small"
                        {...((link as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-row-2">
              <div className="footer-align-horizontally is-strechted is-vertically-aligned-on-mobile">
                <div className="footer-url">© 2025 | ondevi</div>
                <div className="footer-align-horizontally g-2 align-vertically-on-mobile">
                  {footerData.legalLinks.map((link, index) => (
                    <a key={index} href={link.href} className="footer-url">{link.text}</a>
                  ))}
                </div>
              </div>
            </div>
            <LinkedInTracking />
          </div>
        </div>
      </div>
  )
}

export default Footer;