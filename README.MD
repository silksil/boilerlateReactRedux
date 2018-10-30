### Introduction
A boilerplate that uses React, Redux and SCSS.

### How it works
At it's core, Webpack is a bundler: it takes js-files, css-files and images, and bundles it together in order to optimize it.

- It needs one entry point (e.g. app.js). From there it can check which files are dependent on that file, and include it. It will then put all dependencies in one file correctly ordered (e.g. dist/bundle.js).
- Loaders: are applied on a per file level to handle transformation, e.g. all javascript files should be handled by babel-loader( used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript) and scss should be handled by scss-loader.
- Plugins: plugins apply on a global level => you can apply general transformation, and it happens after the loaders have done it's work.

#####  Production
To set-up production set-up you have to create a new Webpack configuration and specify the file name in the package.json. Things to change in comparison to the development webpackfile:
- Use most efficient dev-tools.
- Add plugins like `UglifyJsPlugin` to optimise code.  

The dist folder is eventually the folder that is being put up on the production server.
