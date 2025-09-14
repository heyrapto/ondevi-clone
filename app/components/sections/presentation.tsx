const Presentation = () => {
  return (
    <div className="default-section">
          <div className="global-wrapper">
            <div className="global-headline-div">
              <div className="align-horizontally g-0-5 mobile-break">
                <div className="label">
                  <div className="label-txt">Search</div>
                </div>
                <div className="label">
                  <div className="label-txt">pMax</div>
                </div>
                <div className="label">
                  <div className="label-txt">Shopping</div>
                </div>
                <div className="label">
                  <div className="label-txt">YouTube</div>
                </div>
                <div className="label">
                  <div className="label-txt">Demand Gen</div>
                </div>
                <div className="label">
                  <div className="label-txt">Display</div>
                </div>
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
                    <source src="https://storage.googleapis.com/ondevi.com/ondevi-Push-Pull-Google-Ads-FullSuite-Animation.mp4" />
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
