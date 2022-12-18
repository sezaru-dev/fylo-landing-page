/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'darkBlue-intro': 'hsl(217, 28%, 15%)',
				'darkBlue-main': 'hsl(218, 28%, 13%)',
				'darkBlue-footer': 'hsl(216, 53%, 9%)',
				'darkBlue-tst': 'hsl(219, 30%, 18%)',
				fyloCyan: 'hsl(176, 68%, 64%)',
				fyloBlue: 'hsl(198, 60%, 50%)',
				lightRed: 'hsl(0, 100%, 63%)',
				wht: 'hsl(0, 0%, 100%)',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1.5rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
				screens: {
					sm: '600px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1440px',
				},
			},
		},
		fontFamily: {
			Raleway: ['Raleway, sans-serif'],
			OpenSans: ['Open Sans, sans-serif'],
		},
	},
	plugins: [],
};
