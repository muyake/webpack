const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {
        file: './js/file.js',
        file2: './js/file2.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/[hash]',
        publicPath: "/assets/[hash]/"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "",
            filename: 'index.html',
            chunks: ['file', 'file2'],
            template: './template/index.template.html',
        })
    ],
};

module.exports = config;
