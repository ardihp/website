const projects = [
  {
    title: "Sportif (Spotify Clone)",
    description:
      "The last project while I was studying at the Generasi Gigih Bootcamp",
    image: require("public/projects/project-1.png"),
    stack: [
      { name: "React.js" },
      { name: "React Redux" },
      { name: "Chakra-UI" },
    ],
    url: "https://finale-project.vercel.app/",
    source: "https://github.com/ardihp/finale-project",
  },
  {
    title: "Masak Apa Hari Ini",
    description:
      "This website is used to help people find what they want to cook today, complete with the recipes and steps",
    image: require("public/projects/project-2.jpg"),
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    url: "#",
    source: "#",
  },
  {
    title: "World Ranks",
    description: "My side project for learning data fetching on Next.js",
    image: require("public/projects/project-2.jpg"),
    stack: [{ name: "Next.js" }, { name: "Chakra-UI" }],
    url: "https://world-ranks-mu.vercel.app",
    source: "https://github.com/ardihp/world-ranks",
  },
];

export default projects;
