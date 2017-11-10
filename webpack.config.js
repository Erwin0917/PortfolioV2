const { resolve } = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');


module.exports = function (env) {

	var prod = env !== undefined && env.production === true;
	var dev = env !== undefined && env.development === true;

	return {

		devtool: "source-map",

		entry: {
			app: "./src/js/app.js",
			vendors: ["jquery", "react", "react-dom", "es6-promise/auto", "whatwg-fetch", "./src/js/ventors.js"],
		},

		output: {
			path: dev ? "/dist/" : "",
			path: resolve(__dirname, "dist"),
			filename: prod ? '[name][chunkhash].js' : '[name].js'
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: [
								["env", {
									"targets": {
										"browsers": ["last 3 versions"]
									}
								}],
								'react'
							]
						}
					}
				},
				{
					test: /\.s[ca]ss$/,
					use: ExtractTextWebpackPlugin.extract({
						fallback: "style-loader",
						use: "css-loader!sass-loader"
					})
				},

				{
					test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
					use: [
						{
							loader: 'url-loader',
							query: {
								limit: 10000,
								name: 'img/[name].[ext]'
							}
						}
					]
				}
			]
		},


		plugins: [
			new ExtractTextWebpackPlugin("main.css"),
			new HtmlWebpackPlugin({
				template: "./src/index.html"
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: "vendors"
			}),
			new webpack.ProvidePlugin({
				'window.jQuery': 'jquery',
				'window.$': 'jquery',
				'jQuery': 'jquery',
				'$': 'jquery',
				Popper: ['popper.js', 'default']
			})
			/* new webpack.optimize.UglifyJsPlugin({

				compress: {

					warnings: false

				}

			}) */
		]




	}


}