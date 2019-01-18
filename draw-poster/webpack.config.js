const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        filename: '/dist/build.js'
    },
    devServer: {
        port: 8383,
        hot: true,
        inline: true
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //   title: '绘制海报'
        // }),
        new webpack.HotModuleReplacementPlugin()
    ]
}