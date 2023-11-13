/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./assets/js/main.js", "./**/*.{html,hbs}"],
    darkMode: "class",
    theme: {
        extend: {
            transitionTimingFunction: {
                "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
                "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1);",
            },
        },
        fontFamily: {
            body: ["Montserrat", "sans-serif"],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
    ],
};
