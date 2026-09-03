module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class',
	theme: {
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily:{
				sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['"DM Sans"', 'system-ui', 'sans-serif'],
			},
			colors: {
				paper: '#f4f3ef',
				ink: '#151515',
				night: '#111111',
				accent: '#265dff',
			},
			boxShadow: { soft: '0 24px 70px rgba(20, 20, 20, 0.12)' },
		},
	},
	plugins: [],
};
