const chatMessages = [
  {
    id: 1,
    sender: "Patrick (Teamlead-SEA)",
    time: "07:23",
    message: "Die Shopping Umsätze gehen seit letzter Woche durch die Decke.",
    avatar: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807b33146b5bafdd428f6b0_Frame%2027079%20(2).png",
    companyLogo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807b3ae4383faef478f9965_ondevi-Signet_RGB_P%201.svg",
    reactions: ["🔥", "🎉", "+"]
  },
  {
    id: 2,
    sender: "Lidia (SEA Managerin)",
    time: "07:32",
    message: "Sehr geil. Was habt ihr angepasst?",
    avatar: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ba8309d3c6d7c13e59b5_48940104fb92bd908e54a75752e08df25d76dc56.jpg",
    companyLogo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/682db48e5d31044680f19d82_purelei.png",
    reactions: ["+"]
  },
  {
    id: 3,
    sender: "Patrick (Teamlead-SEA)",
    time: "07:34",
    message: "Durch das neue Performance Based Bucketing wird das Werbebudget optimal über das ganze Sortiment hinweg verteilt.",
    avatar: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807b33146b5bafdd428f6b0_Frame%2027079%20(2).png",
    companyLogo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807b3ae4383faef478f9965_ondevi-Signet_RGB_P%201.svg",
    reactions: ["🚀", "+"]
  },
  {
    id: 4,
    sender: "Lidia (SEA Managerin)",
    time: "08:00",
    message: "Krass, einige Produkte wurden davor nie ausgespielt.",
    avatar: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ba8309d3c6d7c13e59b5_48940104fb92bd908e54a75752e08df25d76dc56.jpg",
    companyLogo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/682db48e5d31044680f19d82_purelei.png",
    reactions: ["+"]
  },
  {
    id: 5,
    sender: "Jakob (Geschäftsführer)",
    time: "08:06",
    message: "Perfektes Thema für unsere Masterclass auf der K5, oder?",
    avatar: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ba33afc0f55e04bc134f_c387c11cb83e320cb344156ff034b726674555e3.jpg",
    companyLogo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807b3ae4383faef478f9965_ondevi-Signet_RGB_P%201.svg",
    reactions: ["🔥", "+"]
  },
  {
    id: 6,
    sender: "Lidia (SEA Managerin)",
    time: "08:09",
    message: "Absolut. Freue mich drauf!",
    avatar: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/6807ba8309d3c6d7c13e59b5_48940104fb92bd908e54a75752e08df25d76dc56.jpg",
    companyLogo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/682db48e5d31044680f19d82_purelei.png",
    reactions: ["🙌", "+"]
  }
];

const Chat = () => {
  return (
    <div className="default-section is-black">
      <div className="global-wrapper">
        <div className="global-headline-div">
          <div className="max-width _40">
            <h2 className="global-headline-l is-white">Und Du? Bist dabei immer Up-to-Date!</h2>
          </div>
          <div className="global-subline-div _1">
            <div className="max-width _35">
              <p className="copytext is-white">Kurze Antwortzeiten, eine klare Roadmap und transparentes Reporting bis DB3. Und das mit einer großen Prise Menschlichkeit. Das ist unser Verständnis einer echten Partnerschaft.</p>
            </div>
          </div>
        </div>
        <div className="global-content-div">
          <div className="max-width _70">
            {chatMessages.map((message, index) => (
              <div key={message.id} className="slide_in_animation global-subline-div _1">
                <div data-w-id={`chat-${message.id}`} className="box _w-100 is-dark">
                  <div className="padding _05">
                    <div className="align-horizontally g-1 _w-100 is-top-aligned">
                      <div className="align-horizontally g-1 is-top-aligned-mobile">
                        <div className="avatar-wrap">
                          <img src={message.companyLogo} loading="lazy" alt="" className="icon custom-1" />
                          <div className="avatar-div">
                            <img 
                              src={message.avatar} 
                              loading="lazy" 
                              alt={`Portrait von ${message.sender}`} 
                              className="icon xl"
                            />
                          </div>
                        </div>
                        <div className="align-vertically is-left-aligned">
                          <div className="align-horizontally g-0-5 is-bottom-aligned">
                            <div className="copytext is-left-aligned is-white">{message.sender} um {message.time}</div>
                          </div>
                          <div className="global-subline-div _05 is-left-aligned">
                            <div className="max-width _30">
                              <div className="copytext-small is-left-aligned is-white">"{message.message}"</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="padding _05 _w-auto">
                        <div className="align-horizontally g-0-5">
                          {message.reactions.map((reaction, reactionIndex) => (
                            <div key={reactionIndex} className="box _w-100 is-dark c1">
                              <div className="padding _05">
                                <div className="copytext-small is-white">{reaction}</div>
                              </div>
                            </div>
                          ))}
                        </div>
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
  )
}

export default Chat
