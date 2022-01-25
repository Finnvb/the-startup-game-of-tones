module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: "#3F51B5",
                    light: "#CDD5E9",
                },
                green: {
                    DEFAULT: "#54BA54",
                    light: "#C8E8C7",
                },
                yellow: {
                    DEFAULT: "#E7EF37",
                    light: "#F4F4D7",
                },
                orange: {
                    DEFAULT: "#FF9400",
                    light: "#F9DDB3",
                },
                purple: {
                    DEFAULT: "#8D74B1",
                    light: "#8D74B1",
                },
            },
            backgroundImage: {
                mixed: "linear-gradient(to top, #fbce6f,#ecf59a,#a9dc93,#8ab2ab, #838fcd)",
                "mixed-l":
                    "linear-gradient(to left, #fbce6f, #ecf59a, #a9dc93, #8ab2ab, #a6aedb)",
            },
        },
    },
    plugins: [],
};
