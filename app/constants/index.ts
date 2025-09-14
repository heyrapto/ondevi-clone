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

  const clientLogos = [
    {
      id: 1,
      name: "Purelei",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small.png",
      srcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/684017588071376d0d9dc2e6_Purelei_Logo_Small.png 592w"
    },
    {
      id: 2,
      name: "Who's Perfect",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a8b33a68155157aaef0f_whos_perfect.svg",
      srcSet: ""
    },
    {
      id: 3,
      name: "VMAX",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a90ad6c545889f7c5c13_vmax-logo%201.png",
      srcSet: ""
    },
    {
      id: 4,
      name: "EIGHTYFIVE",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a9636697789e671c0dc7_image%2030748.png",
      srcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a9636697789e671c0dc7_image%2030748-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a9636697789e671c0dc7_image%2030748.png 750w"
    },
    {
      id: 5,
      name: "Spyra",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808a9a2f7f113d2052549e5_spyra.png",
      srcSet: ""
    },
    {
      id: 6,
      name: "Juskys",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9.png",
      srcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9-p-800.png 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9-p-1080.png 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9-p-1600.png 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9-p-2000.png 2000w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aa099faa8e12b7c19522_eyJrZXkiOiJtZXJjaGFudFwvbG9nb3NcL2U1ODEyMWYwMDhhYTgxOGVhOTJmMzdjMWMyODM5ZGRhLnBuZyJ9.png 2432w"
    },
    {
      id: 7,
      name: "MemoryPC",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/683e0eb0e2a4d60ef10b6b4e_memory.png",
      srcSet: ""
    },
    {
      id: 8,
      name: "Solakon",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aab764351d7745abadd4_image%2030751.png",
      srcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aab764351d7745abadd4_image%2030751-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aab764351d7745abadd4_image%2030751-p-800.png 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aab764351d7745abadd4_image%2030751.png 891w"
    },
    {
      id: 9,
      name: "Alpensattel",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752.png",
      srcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-800.png 800w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-1080.png 1080w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-1600.png 1600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-2000.png 2000w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-2600.png 2600w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752-p-3200.png 3200w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6808aaffc9952e6ad9c69453_image%2030752.png 3366w"
    },
    {
      id: 10,
      name: "Naturbummler",
      logo: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840698dc8f27da23f6d54d7_logo_Naturbummler_Small.png",
      srcSet: "https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840698dc8f27da23f6d54d7_logo_Naturbummler_Small-p-500.png 500w, https://cdn.prod.website-files.com/680794a92c0d51ed197aec2f/6840698dc8f27da23f6d54d7_logo_Naturbummler_Small.png 592w"
    }
  ];