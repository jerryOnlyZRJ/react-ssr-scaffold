module.exports = {
	plugins: {
		'postcss-preset-env': {
			stage: 0,
			browsers: ['> 1%']
		},
		'cssnano': {}
	}
}