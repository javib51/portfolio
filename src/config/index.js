module.exports = {
  siteTitle: 'Javier Benitez | Software Engineer',
  siteDescription:
    'I\'m Javier, a software engineer based in Stockholm, Sweden who enjoys be challenged and solve problems in different ways (System Design, CD/CI, testing and backend development).',
  siteKeywords:
    'Javier Benitez, Benitez, Javier, javib51, software engineer, cloud architect, trukatu, europe, sweden, spain',
  siteUrl: 'https://javib51.github.io/portfolio/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-4dfdf9-2',
  googleVerification: 'Dsdasafg',
  name: 'Javier Benitez',
  location: 'Stockholm, Sweden',
  email: 'javier.benitezf51@gmail.com',
  github: 'https://github.com/javib51',
  twitterHandle: '@javib51',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/javib51',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/javierbf',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/javib51',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/javib51',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
