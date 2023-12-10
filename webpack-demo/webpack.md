### Creating a bundle to manage the lodash and index.js dependency issues
- Tweak the directory structure to separate source code from our distribution code
- This is the minimized and optimsed output of our build process
- Right now, we will create an index.js under /dist manually, which we'll generate index.html 
- To bundle the lodash dependency with index.js, we'll need to install the library locally: npm install --save lodash
- When installing a package that will be bundled into your production bundle, you should use npm install --save. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use npm install --save-dev
- import lodash in script
- Now, since we'll be bundling our scripts, we have to update our index.html file and remove lodash and index.js scripts
- Add main.js scripts
- index.js has lodash declared explicitly -> This helps webpack use this info to build a dependency graph. Webpack uses the graph to generate an optimized bundle where scripts will be executed in the correct order
- Now run npx webpack which takes **src/index.js** as the entry point and will generate **dist/main.js**
- Webpack Configuration file can be used to modify a complex setup -> webpack.config.js
- We can also set up a npm script in the package.json file to do run the webpack via npm, and not npx

- We can aso manage assets like images and fonts with webpack, so let's add **We'll come back to this** -> We're back
    - Webpack can manage your images and compress and optimize them for use on the web. Webpack can minify and uglify your code. There are tons of things webpack can do, but to access these functions we need to learn more about loaders and plugins.

    - Say if there are multiple html pages that each need their own budles, need to give Webpack the entry points of each such file to generate their own output bundles

    - CSS files can also be bundled via wepback, but it should be told to use the right loaders/plugins/rules

### Html-webpack-plugin
- HTML files too need to be handled for Webpack to bundle and put under dist build. This is via Html-webpack-plugin

- Automatically add things like output bundle in a <scipt> tag or the code to use a favicon if we configured it to use one

- To prevent any html file in the /dist to be overwritten, we can tell Webpack to use a template and provide a path to it in webpack.config.js

### Using loaders for bundling multiple types of files
- The dependency graph concept can be extended to CSS etc. as well

- In the following exercise to bundle CSS with JS, let;s install and add style-loader and css-loader to module configuration. We won't use these in production, hence use --save-dev

    - We'll add module loaders(which can be chained together) in the webpack.config.js
        - Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain
        - In our exercise, style-loader will come first to configure the module chain to then accept the css-loader. In Webpack while using a module chain, the order is very important

- We'll also see how to minimise css:
    - A plugin such as css-minimizer-webpack-plugin can be used

- To bundle images, we can use Webpack's built in Asset Modules
    - After the image added in the index.js is processed by webpack, it will be added to the output directory, with icon variable containing url of the final image
    - The css-loader will now process the url, recognizing this is a local file and will replace the icon.png path with final path of the image in the **/dist**
    - The html-loader handles <img src...> in the same manner

- Let's use Webpack to bundle data files such as JSON, CSV, TSV, XML
    - json support is by default, csv; tsv; xml are to be loaded with csv-loader and xml-loader

    - **This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed data is ready to go as soon as the module hits the browser.**
