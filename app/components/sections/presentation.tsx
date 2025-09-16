const labels = [
  { id: 1, text: "Search" },
  { id: 2, text: "pMax" },
  { id: 3, text: "Shopping" },
  { id: 4, text: "YouTube" },
  { id: 5, text: "Demand Gen" },
  { id: 6, text: "Display" }
];

const Presentation = () => {
  return (
    <div className="default-section">
          <div className="global-wrapper">
            <div className="global-headline-div">
              <div className="align-horizontally g-0-5 mobile-break">
                {labels.map((label) => (
                  <div key={label.id} className="label">
                    <div className="label-txt">{label.text}</div>
                  </div>
                ))}
              </div>
              <div className="max-width _45">
                <div className="global-subline-div _1">
                  <h2 className="global-headline-l">Unser Full Suite System schöpft Google&#x27;s volles Potenzial aus...</h2>
                </div>
              </div>
              <div className="global-subline-div _1">
                <div className="max-width _30">
                  <p className="copytext"><span className="is-bold">Unser Ansatz</span> verbindet Push- und Pull-Marketing und erobern alle Placements des Google-Werbekosmos.</p>
                </div>
              </div>
            </div>
            <div className="global-content-div">
              <div className="video w-embed">
                <div id="video-container" style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
                  <video id="responsive-video" autoPlay loop muted playsInline preload="auto" style={{width: '100%', height: '100%', objectFit: 'cover'}}>
                    <source src="/videos/presentation.mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Presentation
