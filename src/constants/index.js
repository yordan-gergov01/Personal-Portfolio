export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "The Wild Oasis - Hotel Management Software for Staff",
    desc: "The Wild Oasis is a comprehensive management tool designed for hotel staff to efficiently manage guest check-ins and check-outs, monitor room availability, and keep track of reservations.",
    subdesc:
      "Built as a unique real-world app with React, Styled-Components, React-Router, Vite and Supabase, The Wild Oasis is designed for optimal performance and scalability.",
    href: "https://github.com/yordan-gergov01/The-Wild-Oasis",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Styled-Components",
        path: "assets/styled-components.png",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
      {
        id: 4,
        name: "Vite",
        path: "/assets/vite-js.png",
      },
    ],
  },
  {
    title: "The Wild Oasis - Customer Booking Website",
    desc: "The Wild Oasis is a modern and seamless booking platform for hotel customers, designed as a companion to the internal hotel management system for The Wild Oasis resort.",
    subdesc:
      "The platform enables customers to explore, reserve, and manage bookings of individual cabins through an intuitive interface with enhanced user experience.",
    href: "https://github.com/yordan-gergov01/The-Wild-Oasis-Website",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "NextJS",
        path: "/assets/nextjs.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  {
    title: "World Wise - Tracking the visited world",
    desc: "WorldWise is a React-based application designed for tracking places (cities and countries) visited around the world. It allows users to interact with a real-world map, place markers, and save notes about their experiences.",
    subdesc:
      "With additional features like city management, Wikipedia integration, and a placeholder authentication system, this app serves as an excellent learning project for React Router and Context API.",
    href: "https://github.com/yordan-gergov01/WorldWise",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      background:
        "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "React Router",
        path: "assets/react-router.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite-js.png",
      },
      {
        id: 4,
        name: "Leaflet",
        path: "/assets/leaflet.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
