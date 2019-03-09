const path = require("path");
// console.log(path)

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js"
  }
};

// provides the absolute path to the route of your project
// For example:
// /Users/Andrew/Desktop/js-bootcamp/boilerplate/public/scripts
// everything up to 'public/scrips' i.e. the part of the path likely to change can be covered by __dirname
// __dirname;
