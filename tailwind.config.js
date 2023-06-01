/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        extend: {
            gridTemplateRows: {
                //7 row grid
                7: "repeat(7, minmax(0, 1fr))",
            },
            gridTemplateColumns: {
                plan: "320px 260px 260px 260px",
            },

            colors: {
                black: "#262626",
                red: "#CE4A37",
                yellow: "#FFAC01",
                grey: "#F9F9F9",
                button_grey: "#CCCCCC",
                my_grey: "#C1C1C1",
                bg_color: "#F2F2F2",
            },
            fontFamily: {
                body: ["Source Sans Pro", "sans-serif"],
                heading: ["Fira Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
