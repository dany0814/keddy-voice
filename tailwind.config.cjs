/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class", // or 'media' or 'class'
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': {'min': '350px', 'max': '640px'},
			// => @media (min-width: 640px and max-width: 767px) { ... }
	  
			'sm': {'min': '640px', 'max': '767px'},
			// => @media (min-width: 640px and max-width: 767px) { ... }
	  
			'md': {'min': '768px', 'max': '1023px'},
			// => @media (min-width: 768px and max-width: 1023px) { ... }
	  
			'lg': {'min': '1024px', 'max': '1279px'},
			// => @media (min-width: 1024px and max-width: 1279px) { ... }
	  
			'xl': {'min': '1280px', 'max': '1535px'},
			// => @media (min-width: 1280px and max-width: 1535px) { ... }
	  
			'2xl': {'min': '1536px'},
			// => @media (min-width: 1536px) { ... }
		  },
		extend: {
			colors: {
				'dark': '#000000',
				'light': '#ffffff',
				'purple': '#812DE2',
				'blue': '#3A49F9',
				'yellow': '#fcc434',
				'black': '#000000'
			  },
		},
	},
	plugins: [],
}
