import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    "100": "#7D7D7A",
                    "200": "#000000",
                    DEFAULT: "#0D0E11",
                },
                secondary: {
                    "100": "#DEDEDE",
                    "200": "#D9D9D9",
                    "300": "#FFFFFF80",
                    DEFAULT: "#FAFAF4",
                },
                'sd-color': {
                    '100': 'rgba(172, 25, 41, 0.5)',
                    '200': 'rgba(151, 251, 87, 0.5)',
                    '300': 'rgba(217, 217, 217, 0.5)',
                }
            },
            fontFamily: {
                "inter": ["var(--font-inter)"],
                "plus-jakarta":["var(--font-plus-jakarta-sans)"]
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;