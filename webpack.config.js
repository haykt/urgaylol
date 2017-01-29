var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/',
    entry: {
        app: './src/entry.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        })
    ],
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true,
        outputPath: path.join(__dirname, 'build')
    },
    module: {
        preLoaders: [],
        postLoaders: [],
        loaders: [
            {
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
            {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'html'
            }
        ]
    },
};
