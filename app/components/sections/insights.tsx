const insights = [
  {
    id: 1,
    title: "Immer einen Schritt voraus",
    description: "Wir verstehen uns als Innovationstreiber und pflegen einen engen Draht zu Google. So sorgen wir dafür, dass unsere Kunden stets von den neuesten Strategien & Google Betas profitieren.",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/683981d3e0230a0a2c55e87e_bild1_Final.jpg",
    alt: "Gruppenbild von drei jungen Männern in einem Büro"
  },
  {
    id: 2,
    title: "Agentur-Klischees challengen",
    description: "Wir machen die Dinge anders als die Agenturen, die du kennst. Wir stehen für Proaktivität, klare Kommunikation und handfeste Ergebnisse.",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/684038e51830d136e87826cc_Ondevi-Office_scenen-0784%201.avif",
    alt: ""
  },
  {
    id: 3,
    title: "Unser Office in München",
    description: "Du findest uns im Herzen von München nur 5 Gehminuten vom Google Headquarter entfernt.\nLandsberger Straße 98, 80339 München",
    image: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/683981dfeed2969fa10e6280_bild3_Final.jpg",
    alt: "Fassade eines modernen Bürogebäudes"
  }
];

const Insights = () => {
  return (
    <div className="default-section">
      <div className="global-wrapper">
        <div className="global-headline-div">
          <div className="max-width _50">
            <h2 className="global-headline-l">Einblicke in unsere Google Ads Agentur</h2>
          </div>
        </div>
        <div className="global-content-div">
          <div className="grid _3">
            {insights.map((insight) => (
              <div key={insight.id} className="box _w-100 is-light-blue">
                <div className="padding _1">
                  <div className="align-vertically">
                    <img 
                      src={insight.image} 
                      loading="lazy" 
                      alt={insight.alt} 
                      className="default-img radius-16 h-custom"
                    />
                    <div className="global-subline-div _1-5 is-left-aligned">
                      <h3 className="global-headline-xs is-left-aligned">{insight.title}</h3>
                      <div className="global-subline-div _05 is-left-aligned">
                        <p className="copytext is-left-aligned">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="global-subline-div _3">
            <a href="/ueber-uns" className="primary-btn is-black _w-auto w-inline-block">
              <div className="btn-txt-div">
                <div className="btn-txt">Mehr über uns erfahren</div>
                <div className="btn-txt">Mehr über uns erfahren</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
