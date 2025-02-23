module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-in',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
			backgroundImage: {
				"custom-image": "url('./assets/me.png')",
				"work-image": "url('./assets/work.png')",
				"tech-image": "url('./assets/tech.png')",
				"rust-image": "url('./assets/rust.png')",
			},
		},
	},
	plugins: [],
};
