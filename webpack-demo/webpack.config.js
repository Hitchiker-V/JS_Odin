const path = require('path');
// Let's import the HTML Webpack Plugin to automatically generate the html file using a template
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: './src/index.js'
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    // devtool: 'inline-source-map',
    // Adding devServer for webpack-dev-server
    devServer: {
        static: './dist', // Running the dev server in the dist dir
    },
    output: {
        // filename: 'main.js',
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single', // This is important for utilising Code Splitting ability in Webpack
        // Added because we have more than one entrypoint on a single HTML page
    },
    // Let's add html-webpack-plugin
    plugins:[
        new HtmlWebpackPlugin({
            // Let's declare a template to generate the html file based on
            // template: './src/index.html',
            // title: 'Output Management',
            title: 'Development',

            // filename: 'index.html',
            // inject: {
            //     'head'
            // If injecting script tag in head, we can use 'scriptLoading' attribute to 'defer' 
        }),
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