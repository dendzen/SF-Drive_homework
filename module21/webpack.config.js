/*module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    }
}*/

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // ...
    entry: './src/index.js',
//    mode: "production",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `./src/index.pug`,
            filename: 'index.html',
            inject: true
        })
 //       new HtmlWebpackPlugin({
//                template: './src/index.pug',
 //               filename: 'index.html'
 //       })
    ],
    optimization:{
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            { test: /\.css$/,
                use: [  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'] },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
}