/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tn: "460px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: {
        100: "#A0E7FF",
        200: "#7FC7F1",
        300: "#5EA8D1",
        400: "#3C8AB2",
        500: "#126F96",
        600: "#0B6D93", // Main color
        700: "#004468", // Main opacity and overlay color
        800: "#00395B",
        900: "#02183F",
      },
      blue: {
        300: "#56A0C9",
        400: "#00BFFF",
        500: "#00A1F2",
        600: "#3B70A3",
        700: "#1369A9",
      },
      green: {
        500: "#008958",
        600: "#007550",
        700: "#006151",
        800: "#004651",
      },
      unter: "#FFFFFF",
      ober: "#001C27",
      danger: "#AC4246",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "body-bg-sm": "url('/images/small/hero/hero-bg-0.jpg')",
        "body-bg-md": "url('/images/middle/hero/hero-bg-0.jpg')",
        "body-bg-lg": "url('/images/large/hero/hero-bg-0.jpg')",

        "hero-bg-sm-0": "url('/images/small/hero/hero-bg-0.jpg')",
        "hero-bg-sm-1": "url('/images/small/hero/hero-bg-1.png')",
        "hero-bg-sm-2": "url('/images/small/hero/hero-bg-2.png')",
        "hero-bg-sm-3": "url('/images/small/hero/hero-bg-3.png')",
        "hero-bg-sm-4": "url('/images/small/hero/hero-bg-4.png')",
        "hero-bg-sm-5": "url('/images/small/hero/hero-bg-5.png')",

        "hero-bg-md-0": "url('/images/middle/hero/hero-bg-0.jpg')",
        "hero-bg-md-1": "url('/images/middle/hero/hero-bg-1.png')",
        "hero-bg-md-2": "url('/images/middle/hero/hero-bg-2.png')",
        "hero-bg-md-3": "url('/images/middle/hero/hero-bg-3.png')",
        "hero-bg-md-4": "url('/images/middle/hero/hero-bg-4.png')",
        "hero-bg-md-5": "url('/images/middle/hero/hero-bg-5.png')",

        "hero-bg-lg-0": "url('/images/large/hero/hero-bg-0.jpg')",
        "hero-bg-lg-1": "url('/images/large/hero/hero-bg-1.png')",
        "hero-bg-lg-2": "url('/images/large/hero/hero-bg-2.png')",
        "hero-bg-lg-3": "url('/images/large/hero/hero-bg-3.png')",
        "hero-bg-lg-4": "url('/images/large/hero/hero-bg-4.png')",
        "hero-bg-lg-5": "url('/images/large/hero/hero-bg-5.png')",
      },
    },
  },
  plugins: [],
};
