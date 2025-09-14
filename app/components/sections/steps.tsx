const timelineSteps = [
  {
    id: 1,
    step: "Schritt 1",
    title: "Erstgespräch",
    description: "Wir lernen uns kennen und prüfen, ob dein Case grundsätzlich zu unserem Skillset passt.",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ce2822cc791e0bafdd14_message.svg",
    wId: "w-node-cbadc18d-b3b0-d1f6-7341-b5a3065b6a0e-197aebfe"
  },
  {
    id: 2,
    step: "Schritt 2",
    title: "Deep Dive Analyse",
    description: "Wir graben uns in die Daten deines Google Ad Accounts und arbeiten Potentiale & Engpässe heraus. Daraus leiten wir eine Roadmap mit einem mehrstufigen Action-Plan ab.",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ce2861088170172b018c_search.svg",
    wId: "w-node-_17866cc5-60db-5fc4-0c6d-2678914f4795-197aebfe"
  },
  {
    id: 3,
    step: "Schritt 3",
    title: "Onboarding",
    description: "Wir arbeiten uns in deine Zielgruppe und Marke ein und optimieren das Tracking Setup. In einem Kickoff stimmen wir die Zielsetzung ab.",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ce2886a78d2109dea34b_deal.svg",
    wId: "w-node-_3e5d90df-b33c-d626-d290-535e72be29ce-197aebfe"
  },
  {
    id: 4,
    step: "Schritt 4",
    title: "Zusammenarbeit",
    description: "Unser Plug & Play Growth Team gibt Vollgas. Neben täglichem Slack Austausch, sprechen wir bi-weekly im Detail über Maßnahmen & Ergebnisse.",
    icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ce28b40fe478e82e95dc_scale.svg",
    wId: "w-node-ad97b9ca-589e-40c8-0189-32412b04b66a-197aebfe"
  }
];

const Steps = () => {
  return (
    <div className="default-section is-light-grey z0 is-white">
      <div className="timeline-wrapper">
        <div className="timeline-spacer purewhite"></div>
        <div className="timeline-headline purewhite">
          <div className="max-width _35">
            <h2 className="global-headline-l">Was nach deiner Anfrage passiert</h2>
          </div>
        </div>
        <div className="timeline-spacer purewhite"></div>
        <div className="timeline-content">
          <div className="align-vertically">
            <div className="timeline-grid">
              <div className="timeline-progress">
                <div className="timeline-bar"></div>
                <div className="timeline-fade-top"></div>
                <div className="timeline-fade-bottom"></div>
              </div>
              {timelineSteps.map((step) => (
                <div key={step.id} className="slide_in_animation">
                  <div className="timeline-item">
                    <div className="vw-desktop-tablet">
                      <div className="align-vertically is-right-aligned"></div>
                    </div>
                    <div id={step.wId} className="timeline-center">
                      <img loading="lazy" src={step.icon} alt="" className="icon xl" />
                    </div>
                    <div id={`w-node-${step.wId.split('-')[1]}-${step.wId.split('-')[2]}-${step.wId.split('-')[3]}-${step.wId.split('-')[4]}-${step.wId.split('-')[5]}-197aebfe`} className="align-vertically is-left-aligned in-timeline">
                      <div className="label">
                        <div className="label-txt">{step.step}</div>
                      </div>
                      <div className="global-subline-div _1 is-left-aligned">
                        <h3 className="global-headline-s is-left-aligned">{step.title}</h3>
                      </div>
                      <div className="global-subline-div _1">
                        <p className="copytext is-left-aligned">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="timeline-spacer purewhite"></div>
      </div>
    </div>
  )
}

export default Steps
