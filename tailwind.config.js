/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		animation: {
			marquee: "marquee 25s linear infinite",
			marquee2: "marquee2 25s linear infinite",
		},
		keyframes: {
			marquee: {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-100%)" },
			},
			marquee2: {
				"0%": { transform: "translateX(100%)" },
				"100%": { transform: "translateX(0%)" },
			},
		},
		extend: {
			colors: {
				blue1: "#144893",
				blue2: "#2270e2",
				graybg: "#222222",
				offwhite: "#fcfcfc",
				offwhite2: "#f55f5f5",
			},
		},
	},
	plugins: [],
};
