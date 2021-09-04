import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pratik Haldankar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'This is my personal portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pratik Haldankar',
  subtitle: 'I am an Android Developer and UI/UX Designer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'prof1.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/pratik-haldankar-1b237a205/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Creators Compound',
    info: 'As of 2021, there are more than 37 million YouTube channels out there.',
    info2: 'Creators Compound is an Android App, which helps creators to provid themeselves with a platform to Pitch their Ideas to Well known Sponsors and get Funding, Learn all there is to know about SEO and Marketing Skills and Interact with People across the world',
    url: 'https://youtu.be/RvM8rPX3oMg',
    repo: 'https://github.com/pratik2315/Creators_compound', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Covi-Socials',
    info: 'Covi Socials is an Android app made with Android Studio(Kotlin) The app is inspired from social media platforms such as Instagram, Facebook and Linkedin. This app is made for hospital patients as well as doctors so that they can share their daily life and progress.',
    info2: '',
    url: 'https://github.com/pratik2315/covi_socials',
    repo: 'https://github.com/pratik2315/covi_socials', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Dev-Swag Shop',
    info: 'Dev-Swag Shop is an Online E-Commerce made with Python(Django) websites made Specially for Developer Community',
    info2: 'This E-Commerce website is made to maximize the efficiency of developers or student community. Here people can buy different swags, developer tools provided by Major tech companies *Work In Progress*',
    url: 'https://github.com/pratik2315/dev-shop-website',
    repo: 'https://github.com/pratik2315/dev-shop-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.',
    title: 'NBA Connect',
    info: 'Part of MLH Slam Dunks Hackathon, NBA-Connect is a Simple but Fun App which lets the user see Player card and Information',
    info2: 'This App comes with a in-built Lucky Wheel Mini Game, User can also see trending content related to the Basketball World',
    url: 'https://youtu.be/VTG4CCNDkEc',
    repo: 'https://github.com/pratik2315/basketball-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'pratikhaldankar360@gmail.com',
  email: 'pratikhaldankar360@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/haldanka9',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pratik-haldankar-1b237a205/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pratik2315',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
