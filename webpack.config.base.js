var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"), 默认就是dist
    // filename: "index.js",
    filename: "index.[contenthash].js", //生成的文件名字
  },
  //html
  plugins: [
    new HtmlWebpackPlugin({
      //名字默认就是index
      title: "小黑",
      template: "src/assets/index.html", //用我给你的html来生成模板
    }),
  ],
};
