/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                screen: "100dvh",
            },
            colors: {
                "dark-gray": "hsl(0, 0%, 59%)",
                "very-dark-gray": "hsl(0, 0%, 17%)",
            },
            fontSize: {
                base: "18px",
            },
            fontFamily: {
                sans: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [],
};
