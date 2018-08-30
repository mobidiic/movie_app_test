var webpack = require("webpack")
var path = require("path")
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

process.noDeprecation = true

module.exports = {
    entry: ['babel-polyfill', "./src/index.js"],
    output: {
        path:path.join(__dirname, 'dist', 'assets'),
        filename: "bundle.js"
    },
    optimization:{
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: false
        })
      ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                  { loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      module: true,
                      localIdentName: '[name]__[local]__[hash: base64:5]'
                    }},
                  { loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}]
            },
            {
                test: /\.scss/,
                use: ['style-loader',
                  { loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      module: true,
                      localIdentName: '[name]__[local]__[hash: base64:5]'
                    }},
                  { loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'movie-app',
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
}
