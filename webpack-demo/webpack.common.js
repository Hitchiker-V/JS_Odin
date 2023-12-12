const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Production',
        }),
    ],
    output:{
        filename: '[name].bundle.js', // app.bundle.js
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module:{
        rules:[
            {
                // Webpack uses regex to find which files to look for
                // Here it'll find any file that ends with .css
                // $/i is used to signify EOL ($) and mark the search for being case-insensitive (i)
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};