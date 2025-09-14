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
            {/* Timeline items would go here */}
          </div>
        </div>
      </div>
      <div className="timeline-spacer purewhite"></div>
    </div>
  </div>

  )
}

export default Steps
