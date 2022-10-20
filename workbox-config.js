module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,eot,svg,ttf,woff,woff2,otf,txt,html,jpg,js,json,gif,rb,less,scss,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};