const features = [
  {
    id: 1,
    title: "Maximale Shopping Performance",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad7a7d84656318e11a08_chart-line-solid%202.svg",
    iconHover: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad79d70327eb18bc34dd_chart-line-solid%201.svg",
    description: "Wir dominieren Google Shopping, indem wir deinen Datenfeed mit Faktoren, wie Marge, Retourenquote und Customer Lifetime Value anreichern. Mit eigens entwickelten Skripten steuern wir dann automatisch jedes Produkt mit dem richtigen Ziel & Budget aus, um den maximalen Profit zu erzielen. Die Reduktion von Klickkosten um bis zu -20% durch unsere hauseigene Google CSS-Lösung, sowie die Erhöhung der CTRs dank der Integration von Sternebewertungen in Produktanzeigen, sind für uns Standard."
  },
  {
    id: 2,
    title: "Tracking Exzellenz",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807a97e610c2227e11fd8a7_eye-solid%202.svg",
    iconHover: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807a99497f389e6f4028344_eye-solid%201.svg",
    description: "Mit unserer perfektionierten inhouse Trackinglösung bringen wir die bestmögliche Datenqualität in dein Konto. So kann der Google Algorithmus optimal für dich arbeiten. Consent Mode? Server-Side-Tracking? DSGVO? Kein Problem für unsere Entwickler und Tracking-Experten."
  },
  {
    id: 3,
    title: "Ganzheitliche E-Commerce Expertise",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad79b5da37543552d02c_cart-shopping-solid%202.svg",
    iconHover: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad7a886e30ed27f463de_cart-shopping-solid%201.svg",
    description: "Silo-Denken war gestern. Nach +100 Projekten wissen wir, wie Google Ads im Gesamtkontext anderer Channels und Wachstumsphasen richtig einzuordnen ist. Statt reiner ROAS-Optimierung im Werbekonto gehen wir mit Multi-Channel-Attribution bis zum DB3."
  },
  {
    id: 4,
    title: "Creative Strategy & Ad Creation",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807adab2b3eb1a16354a98a_video-solid%202.svg",
    iconHover: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807adabfd28f20610970bc4_video-solid%201.svg",
    description: "Wir testen verschiedene Kommunikationsrouten und visuelle Ansätze. Dabei erkennen wir Muster & Erfolgsfaktoren für hochperformante Ad Creatives. Dinge, die du sonst bei einer Social Media Agentur vermuten würdest."
  },
  {
    id: 5,
    title: "Intent-Based Landingpages & Advertorials",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad7a06fe3c7513a9b189_laptop-solid%202.svg",
    iconHover: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad7adff1479ab288fc59_laptop-solid%201.svg",
    description: "Weil einfache Produktseiten oft nicht ausreichen, matchen wir User-Intention mit dezidierten Landingpages und Advertorials. So sorgen wir für maximale Conversion-Rates."
  },
  {
    id: 6,
    title: "Grenzenlose Expansion",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad7a1e0575d78ac81978_rocket-solid%202.svg",
    iconHover: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ad798af7fa3b6c11be21_rocket-solid%201.svg",
    description: "Von A wie Australien bis Z wie Zypern. Es gibt kaum Länder, in denen unsere Google Ads noch nicht zu sehen waren. Und wenn wir an die Grenzen von Google stoßen? Dann weiten wir deine Kampagnen einfach auf Suchmaschinen wie Bing, Yahoo & DuckDuckGO aus."
  }
];

const Features = () => {
  return (
    <div className="default-section is-light-grey">
      <div className="global-wrapper">
        <div className="global-headline-div">
          <div className="max-width _50">
            <h2 className="global-headline-l">... und vereint auch Hebel außerhalb des Werbekontos.</h2>
          </div>
          <div className="global-subline-div _1">
            <div className="max-width _35">
              <p className="copytext">Für exzellente Ergebnisse muss alles ineinandergreifen. Lückenloses 3rd-Party Tracking, durchdachte Creatives, konvertierende Landing-Pages und eigene Datenfeeds - wir kümmern uns als Google Ads Agentur um alles Nötige damit deine <a href="/google-ads-agentur">Google Ads</a> fliegen.</p>
            </div>
          </div>
        </div>
        <div className="global-content-div">
          <div className="max-width _45">
            <div className="align-vertically">
              {features.map((feature, index) => (
                <div key={feature.id} className="slide_in_animation global-subline-div _1">
                  <div data-w-id={`feature-${feature.id}`} style={{backgroundColor: 'rgb(239,241,255)'}} className="box _w-100 is-pointer is-light-blue">
                    <div className="padding _2">
                      <div className="align-vertically">
                        <div className="align-horizontally g-1 _w-100">
                          <div className="align-horizontally g-0-5 mobile-break-left">
                            <div className="section-layer-div _w-auto">
                              <div className="section-layer-1">
                                <img src={feature.icon} loading="lazy" alt="" className="icon" />
                              </div>
                              <div style={{opacity: 0}} className="section-layer-2">
                                <img src={feature.iconHover} loading="lazy" alt="" className="icon" />
                              </div>
                            </div>
                            <h2 style={{color: 'rgb(1,21,92)'}} className="global-headline-xxs is-left-aligned is-navy">{feature.title}</h2>
                          </div>
                          <div className="faq-icon-div">
                            <div style={{backgroundColor: 'rgb(1,21,92)'}} className="faq-icon-line-1"></div>
                            <div style={{backgroundColor: 'rgb(1,21,92)'}} className="faq-icon-line-2"></div>
                          </div>
                        </div>
                        <div style={{
                          WebkitTransform: 'translate3d(0, 100%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          MozTransform: 'translate3d(0, 100%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          msTransform: 'translate3d(0, 100%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          transform: 'translate3d(0, 100%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          opacity: 0,
                          height: '0px'
                        }} className="global-subline-div">
                          <p style={{color: 'rgb(1,21,92)'}} className="copytext is-left-aligned is-navy">
                            <br/>{feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
