/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				primaryColor: "#FB8E0B",
				bgRegisterColor: "#E5E5E5",
				bgGrey: "#E5E5E5",
				textSecColor: "#778CA2",
				textRed: "#D71E0E",
			},
		},
	},
	plugins: [],
};
