var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base, //把base的所有属性抄过来
  mode: "development",
  //server
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },

  //css
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     //css
        //     options: {
        //       // you can specify a publicPath here
        //       // by default it uses publicPath in webpackOptions.output
        //       publicPath: "../",
        //       hmr: process.env.NODE_ENV === "development",
        //     },
        //   },
        //   "css-loader",
        // ], //将css作为字符串加载到js中
        use: ["style-loader", "css-loader"], //放入style标签，将css作为字符串加载到js中
      },
    ],
  },
};
