const path = require("path");
// console.log(path)

module.exports = {
  entry: {
    index: ["babel-polyfill", "./src/index.js"],
    edit: ["babel-polyfill", "./src/edit.js"]
  },
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/scripts/"
  },
  devtool: "source-map"
};

// provides the absolute path to the route of your project
// For example:
// /Users/Andrew/Desktop/js-bootcamp/boilerplate/public/scripts
// everything up to 'public/scrips' i.e. the part of the path likely to change can be covered by __dirname
// __dirname;
// ===============================================================================
// Webpack loader - can use to customise what happens when webpack loads a file with it's module system
// i.e. babel loader
// ===============================================================================
