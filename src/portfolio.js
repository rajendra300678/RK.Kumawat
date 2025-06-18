/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rajendra Kumawat",
  title: "Hi all, I'm Raj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building ATM and Mobile applications with JavaScript / Flutter / Nodejs / React JS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19nqhx3sa18N_hIVwZHtOqikHHCV10EAq/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


 

const socialMediaLinks = {
  github: "https://github.com/rajendra300678",
  linkedin: "https://www.linkedin.com/in/rakendra/",
  gmail: "Rajendra300678@gmail.com",
  gitlab: "https://gitlab.com/Rajendra300678",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "Fultter",
      fontAwesomeClassname: "fas fa-flutter"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Sqlite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgresSql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AAIDU, Allahabad",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "2002 - 2003",
    },
    {
      schoolName: "Rajasthan University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in maths",
      duration: "1997 - 2001",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "English",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Neerja Softwares",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2014 – Present",
      desc: "I'm a passionate and results-driven developer with experience in building innovative and scalable applications. I’ve worked on a range of projects across industries:",
      descBullets: [
        "ATM Cryptocurrency Project – Developed secure and efficient features for a cryptocurrency-based ATM platform.",
        "MDLogic – Contributed to a healthcare management system focused on improving clinical workflows and data accessibility.",
        "Curatus App (Ongoing) – Currently developing a blockchain-based file-sharing application using Flutter, emphasizing privacy, decentralization, and seamless cross-platform experience.",
        "I specialize in Flutter and blockchain integration, and I thrive in building solutions that combine performance, usability, and cutting-edge technology."
      ]
    },
    {
      role: "Software Engineer",
      company: "Swastik Info Solutions",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "3.5+ Year",
      desc: "Delivered recharge portals, e-commerce, and government projects.",
      descBullets: [
        "Recharge Portals & E-Commerce Platforms – Delivered fast, reliable, and user-friendly portals for mobile recharges and online shopping experiences.",
        "Government Projects – Participated in digital transformation initiatives, building scalable and secure solutions tailored to public-sector needs."
      ]
    },
    {
      role: "Trainer",
      company: "HCLTech",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "1 Year",
      desc: "Handled technical operations at police stations."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("My Apps 🏆 "),
  subtitle:
    "A collection of My Android apps I've built and published on the Play Store — designed, developed, and maintained by me!",

  achievementsCards: [
    {
      title: "Lord Ganesh Sticker",
      subtitle:
        "Lord Ganesh Stickers has the largest collection of stickers that you can share with your friends and family WhatssApp group.",
      image: require("./assets/images/ganesh.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View App",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.godganeshstickers&hl=en"
        },
      ]
    },
    {
      title: "Ram Bhakt Hanuman",
      subtitle:
        "Lord Hanuman Stickers has the largest collection of stickers that you can share with your friends and family WhatssApp group.",
      image: require("./assets/images/Hanuman.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View App",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.hanumanjistickers&hl=en"
        }
      ]
    },{
      title: "Video Splitter 30s Story Trim",
      subtitle:
        "Video Splitter 30s Story Trim is a versatile and user-friendly mobile application designed to empower your video storytelling experience. With a suite of powerful editing tools and intuitive features, this app is your go-to solution for effortlessly crafting engaging video stories",
      image: require("./assets/images/Splitter.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View App",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.cutvideoforstatus&hl=en"
        }
      ]
    },{
      title: "Prank Funny Sounds",
      subtitle:
        "Prank Funny Sounds is an entertaining and hilarious mobile app that offers a wide variety of comical audio clips and sound effects designed to add laughter and amusement to your daily life. With a collection of over 400 unique and side-splitting sound bites, this app guarantees endless moments of fun and mischief",
      image: require("./assets/images/Prank.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View App",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.funnypranksound&hl=en"
        }
      ]
    },{
      title: "AI Profile Pic Generator",
      subtitle:
        "Profile Pic Generator is a feature-rich and user-friendly application designed to help you create stunning and personalised profile pictures for your online presence.",
      image: require("./assets/images/aidpmaker.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View App",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.aidpmaker&hl=en"
        }
      ]
    },{
      title: "Artistic Video Glitches",
      subtitle:
        "Slideshow maker apps let users easily create personalized photo and video slideshows with music, transitions, and text. Perfect for special occasions or storytelling, they transform memories into engaging visual experiences. With simple interfaces and creative features, these apps are ideal for both casual users and professionals to share memorable moments.",
      image: require("./assets/images/Artistic.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View App",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.artisticvideoglitches&hl=en"
        }
      ]
    },{
      title: "Mehndi Patterns",
      subtitle:
        "Welcome to the world of Mehndi Designs, where the timeless art of Mehndi comes to life on your device. Our app is a treasure trove of exquisite henna designs that cater to a diverse range of occasions and preferences.",
      image: require("./assets/images/Mehndi.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.offlinemehndidesigns&hl=en"
        }
      ]
    },{
      title: "Capture Photo With Location",
      subtitle:
        "This app is more than a camera—it's your storytelling companion. It captures moments with rich context, turning each photo into a chapter of your journey. Perfect for travelers and memory keepers, it weaves your experiences with location, creating vivid, meaningful stories that go beyond simple snapshots.",
      image: require("./assets/images/gpscamera.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.gpscamera&hl=en"
        }
      ]
    },{
      title: "Holiday Greetings Stickers",
      subtitle:
        "All Holiday Greetings Stickers has the largest collection of stickers that you can share with your friends and family WhatssApp group.",
      image: require("./assets/images/Holiday.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View",
          url: "https://play.google.com/store/apps/details?id=com.ballapps.allfstickers&hl=en"
        }
      ]
    },{
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },{
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },{
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8003620406",
  email_address: "Rajendra300678@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
