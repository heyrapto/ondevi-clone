const navbarData = {
  logo: {
    src: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/680797fd9d39d73a2bfcdcf0_logo.svg",
    alt: "logo"
  },
  navItems: [
    { id: 1, text: "References", href: "/referenzen", type: "link" },
    { id: 2, text: "About Us", href: "/ueber-uns", type: "link" },
    { id: 3, text: "career", href: "/karriere", type: "link" },
    { id: 4, text: "Blog", href: "/ressourcen/blog", type: "link" },
    { 
      id: 5, 
      text: "resources", 
      type: "dropdown",
      icon: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec0e/680794a92c0d51ed197aec3b_right.png",
      dropdownItems: [
        { text: "magazine", href: "/ressourcen/blog" },
        { text: "White paper", href: "/ressourcen/whitepaper" },
        { text: "Events", href: "/ressourcen/events" }
      ],
      isHidden: true
    },
    { id: 6, text: "contact", href: "/kontakt", type: "link" },
    { id: 7, text: "Get account analysis", href: "/account-analyse", type: "button" }
  ]
};

const Navbar = () => {
    return (
        <div className="nav" >
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="webflow-native-nav w-nav">
                <div className="nav-outer">
                    <div className="nav-inner">
                        <a href="/" aria-current="page" className="nav-log-div w-nav-brand w--current" aria-label="home">
                            <img loading="eager" src={navbarData.logo.src} alt={navbarData.logo.alt} className="nav-logo" />
                            </a>
                            <nav role="navigation" className="nav-menu-div w-nav-menu">
                            <ul role="list" className="nav-menu-right w-list-unstyled">
                                {navbarData.navItems.map((item) => (
                                  <li key={item.id} className={`nav-item ${item.isHidden ? 'hide' : ''}`}>
                                    {item.type === 'link' && (
                                      <a href={item.href} className="nav-link">
                                        <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                          <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                            {item.text}
                                          </span>
                                        </span>
                                      </a>
                                    )}
                                    
                                    {item.type === 'dropdown' && (
                                      <>
                                        <div data-w-id="c291f742-80df-aba7-8061-ecc765f8e6c4" className="dropdown-trigger">
                                          <div className="nav-txt">
                                            <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                              <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                                {item.text}
                                              </span>
                                            </span>
                                          </div>
                                          <img 
                                            loading="lazy" 
                                            src={item.icon} 
                                            alt="" 
                                            className="nav-link-icon" 
                                            style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg), transformStyle: preserve-3d" }} 
                                          />
                                        </div>
                                        <div className="dropdown-1" style={{display: "none"}}>
                                          {item.dropdownItems?.map((dropdownItem, index) => (
                                            <a key={index} href={dropdownItem.href} className="nav-link-dropdown">
                                              <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                                <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                                  {dropdownItem.text}
                                                </span>
                                              </span>
                                            </a>
                                          ))}
                                        </div>
                                      </>
                                    )}
                                    
                                    {item.type === 'button' && (
                                      <a href={item.href} className="primary-btn w-inline-block">
                                        <div className="btn-txt-div">
                                          <div className="btn-txt">
                                            <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                              <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                                {item.text}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="btn-txt">
                                            <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                              <span dir="auto" style={{ verticalAlign: "inherit" }}>
                                                {item.text}
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    )}
                                  </li>
                                ))}
                            </ul>
                        </nav>
                        <div id="w-node-c291f742-80df-aba7-8061-ecc765f8e6dc-65f8e6ba" className="nav-btn-div">
                            <div className="menu-button w-nav-button" style={{WebkitUserSelect: "text"}} aria-label="menu" role="button" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                            <div data-is-ix2-target="1" className="hamburger-menu-dark" data-w-id="c291f742-80df-aba7-8061-ecc765f8e6de" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/651c108eb872267d4aa47721/656ded12344f49ccd419d07f_Animation%20-%201701702906014.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.3333333333333335" data-duration="0" data-ix2-initial-state="0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" style={{width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible"}}><defs><clipPath id="__lottie_element_3"><rect width="24" height="24" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_3)"><g transform="matrix(1,0,0,1,2.75,5.75)" opacity="1" style={{display: "block"}}><path fill="rgb(26,26,38)" fill-opacity="1" d=" M0.25,12.25 C0.25,12.25 18.25,12.25 18.25,12.25 C18.25,12.25 18.25,10.25 18.25,10.25 C18.25,10.25 0.25,10.25 0.25,10.25 C0.25,10.25 0.25,12.25 0.25,12.25z"></path></g><g transform="matrix(1,0,0,1,2.75,5.75)" opacity="1" style={{display: "block"}}><path fill="rgb(26,26,38)" fill-opacity="1" d=" M0.25,7.25 C0.25,7.25 18.25,7.25 18.25,7.25 C18.25,7.25 18.25,5.25 18.25,5.25 C18.25,5.25 0.25,5.25 0.25,5.25 C0.25,5.25 0.25,7.25 0.25,7.25z"></path></g><g transform="matrix(1,0,0,1,2.75,5.75)" opacity="1" style={{display: "block"}}><path fill="rgb(26,26,38)" fill-opacity="1" d=" M0.25,0.25 C0.25,0.25 18.25,0.25 18.25,0.25 C18.25,0.25 18.25,2.25 18.25,2.25 C18.25,2.25 0.25,2.25 0.25,2.25 C0.25,2.25 0.25,0.25 0.25,0.25z"></path></g>
                                </g>
                                </svg>
                                </div>
                                <div className="hamburger-menu-white" data-w-id="00467a5d-d7a5-7257-5b34-d3d5c845a2a9" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/651c108eb872267d4aa47721/656e40dffb81768885f3d9a9_menu_white.json" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.3333333333333335" data-duration="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" style={{width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible"}}><defs><clipPath id="__lottie_element_13"><rect width="24" height="24" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_13)"><g transform="matrix(1,0,0,1,2.75,5.75)" opacity="1" style={{display: "block"}}><path fill="rgb(255,255,255)" fill-opacity="1" d=" M0.25,12.25 C0.25,12.25 18.25,12.25 18.25,12.25 C18.25,12.25 18.25,10.25 18.25,10.25 C18.25,10.25 0.25,10.25 0.25,10.25 C0.25,10.25 0.25,12.25 0.25,12.25z">
                                </path>
                                </g><g transform="matrix(1,0,0,1,2.75,5.75)" opacity="1" style={{display: "block"}}>
                                        <path fill="rgb(255,255,255)" fill-opacity="1" d=" M0.25,7.25 C0.25,7.25 18.25,7.25 18.25,7.25 C18.25,7.25 18.25,5.25 18.25,5.25 C18.25,5.25 0.25,5.25 0.25,5.25 C0.25,5.25 0.25,7.25 0.25,7.25z">
                                        </path></g><g transform="matrix(1,0,0,1,2.75,5.75)" opacity="1" style={{display: "block"}}>
                                        <path fill="rgb(255,255,255)" fill-opacity="1" d=" M0.25,0.25 C0.25,0.25 18.25,0.25 18.25,0.25 C18.25,0.25 18.25,2.25 18.25,2.25 C18.25,2.25 0.25,2.25 0.25,2.25 C0.25,2.25 0.25,0.25 0.25,0.25z">

                                        </path>
                                    </g>
                                </g>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0">
                </div>
            </div>
        </div>
    )
}

export default Navbar
