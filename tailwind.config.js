module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	content: ['./public/*.html'],
	// be sure to clear the .cache directory if you make changes to the items below
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
