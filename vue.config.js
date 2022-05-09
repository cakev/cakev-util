const pkg = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	pages: {
		index: {
			entry: './play/main.ts',
		},
	},
	productionSourceMap: false,
	assetsDir: './',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
	css: {
		extract: process.env.VUE_APP_BUILD_MODE === 'NPM',
		sourceMap: false,
	},
	configureWebpack: config => {
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		if (process.env.VUE_APP_BUILD_MODE === 'NPM') {
			config.externals = [
				{
					vue: {
						root: 'Vue',
						commonjs: 'vue',
						commonjs2: 'vue',
						amd: 'vue',
					},
				},
			]
		} else {
			config.externals = [
				{
					vue: 'Vue',
				},
			]
		}
	},
	chainWebpack: config => {
		config.plugin('define').tap(args => {
			args[0]['process.env'].version = JSON.stringify(pkg.version)
			return args
		})
		if (isProduction) {
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
	},
}
