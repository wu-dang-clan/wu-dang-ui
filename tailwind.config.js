/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  //동적 클래스 허용
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|secondary|tertiary|error)(_container)?/,
    },
    {
      pattern: /text-on_(primary|secondary|tertiary|error)(_container)?/,
    },
  ],

  theme: {
    extend: {
      colors: {
        // color palette

        //color primary
        primary: "#65558F",
        on_primary: "#FFFFFF",
        primary_container: "#EADDFF",
        on_primary_container: "#4F378A",

        //color secondary
        secondary: "#625B71",
        on_secondary: "#FFFFFF",
        secondary_container: "#E8DEF8",
        on_secondary_container: "#4A4459",

        //color tertiary
        tertiary: "#7D5260",
        on_tertiary: "#FFFFFF",
        tertiary_container: "#FFD8E4",
        on_tertiary_container: "#633B48",

        //color error
        error: "#B3261E",
        on_error: "#FFFFFF",
        error_container: "#F9DEDC",
        on_error_container: "#852221",

        //color surface
        surface_dim: "#DED8E1",
        surface: "#FEF7FF",
        surface_bright: "#FEF7FF",

        //color surface container
        surf_container_lowest: "#FFFFFF",
        surf_container_low: "#F7F2FA",
        surf_container: "#F3EDF7",
        surf_container_high: "#ECE6F0",
        surf_container_highest: "#E6E0E9",

        //color onSurface container
        onSurface: "#1D1B20",
        onSurfaceVar: "#49454F",
        outline: "#79747E",
        outlineVar: "#CAC4D0",

        //color black
        scrim: "rgba(0, 0, 0, 0.5)",
        shadow: "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
