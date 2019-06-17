const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}

module.exports = config;