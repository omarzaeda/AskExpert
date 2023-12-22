/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: "'Cabin' , sans-serif",
        lato: "'Lato' , sans-serif",
      },
      colors: {
        primary: "#FFCC4A",
        secondary: "#4EAF4E",
        black: {
          1: "#262626",
          2: "#181818",
          3: "#303030",
          4: "#000",
          5: "#151515",
        },
        gray: {
          1: "#353535",
          2: "#F3F3F3",
          3: "#595566",
          4: "#EBEBEB",
          5: "#F5F5F5",
          6: "#8A8A8A",
          7: "#F2F2F2",
          8: "#3E3E3E",
          9: "#C1C1C1",
          10: "#707070",
        },
      },
      backgroundImage: {
        finance: "url('./images/finance.png')",
        approach: "url('./images/approach.png')",
        result: "url('./images/result.png')",
        experiancebg: "url('./images/experiancebg.png')",
        workbg: "url('./images/workBackground.png')",
        workGrid1: "url('./images/workGrid1.png')",
        ourTeam: "url('./images/OurTeam.png')",
        footerbg: "url('./images/FooterBackground.png')",
        HeroAbout: "url('./images/HeroAboutBackground.png')",
        HeroServices: "url('./images/HeroServicesBackground.png')",
        bgBlog: "url('./images/bgBlog.png')",
        SingleBlogHero: "url('./images/SingleBlogHero.png')",
        ContactHeroBg: "url('./images/ContactHeroBg.png')",
      },
    },
  },
  plugins: [],
};
