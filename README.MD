### Introduction
A boilerplate that uses React, Redux and SCSS. Also includes:
- redux-thunk
- prop-types

### How it works
At it's core, Webpack is a bundler: it takes js-files, css-files and images, and bundles it together in order to optimize it.

- It needs one entry point (e.g. app.js). From there it can check which files are dependent on that file, and include it. It will then put all dependencies in one file correctly ordered (e.g. dist/bundle.js).
- Loaders: are applied on a per file level to handle transformation, e.g. all javascript files should be handled by babel-loader( used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript) and scss should be handled by scss-loader.
- Plugins: plugins apply on a global level => you can apply general transformation, and it happens after the loaders have done it's work.

###  Production
To set-up production set-up you have to create a new Webpack configuration and specify the file name in the package.json. What changes in comparison to development in production in the webpackfile is:
- Use most efficient dev-tools: `cheap-module-source-map` instead of `cheap-module-eval-source-map`.
- Add plugin `UglifyJsPlugin` to optimise code.  
