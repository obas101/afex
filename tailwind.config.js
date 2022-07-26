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
			colors: {
				primaryColor: "#FB8E0B",
				bgGrey: "#E5E5E5",
				textSecColor: "#778CA2",
				textRed: "#D71E0E",
			},
		},
	},
	plugins: [],
};
