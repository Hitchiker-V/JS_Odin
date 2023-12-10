const path = require('path');
// Let's import the HTML Webpack Plugin to automatically generate the html file using a template
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Let's add html-webpack-plugin
    plugins:[
        new HtmlWebpackPlugin({
            // Let's declare a template to generate the html file based on
            template: './src/index.html',
            // title: 'Webpack HTML Plugin demo',
            filename: 'index.html',
            inject: 'body',
            // If injecting script tag in head, we can use 'scriptLoading' attribute to 'defer' 
        })
    ],
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