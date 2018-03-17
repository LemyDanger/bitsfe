const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


console.log("Look",path.join(__dirname, 'assets'));

module.exports = {

    entry: {
        bond : ['./src/index.ts']
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: 'bond',
    },
    module: {
        rules : [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
        }
    },
    plugins: [

    ],
    devServer: {
        contentBase: path.join(__dirname)+'/dist',
        publicPath: "/dist/",
        compress: true,
        port: 8500,
        host: "0.0.0.0",
        disableHostCheck: true
    }

};




