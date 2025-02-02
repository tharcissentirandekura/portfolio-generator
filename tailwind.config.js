module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-image": "url('./assets/me.png')",
				"work-image": "url('./assets/work.png')",
			},
		},
	},
	plugins: [],
};
