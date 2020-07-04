var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"), 默认就是dist
    // filename: "index.js",
    filename: "[name].[contenthash].js",
  },
};
