const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
            // For bundling images
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                // Using the below type to use Webpack's built-in Asset Modules
                type: 'asset/resource',
            },
            {
                test:/\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test:/\.(xml)$/i,
                use: ['xml-loader'],
            }
        ],
    },
};