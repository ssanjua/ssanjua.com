/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        'background-dark': '#0F0F0F',
        'background-light': '#f5f5f5',
        green: '#0a996f',
        blue: '#0a6789',
        red: '#cf0638',
        orange: '#fa6632',
        yellow: '#fecd23',
				pink: '#E54980',
				gris: '#1B1B1D',
				yellowsm: '#cfa334',
				purple: '#B43EFE',
				lightgray: '#33332D',
				light: '#E1E1E1'
      }
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
