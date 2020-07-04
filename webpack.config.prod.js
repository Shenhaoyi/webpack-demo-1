var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base, //把base的所有属性抄过来
  mode: "production",

  plugins: [
    ...base.plugins,
    //css
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],

  //css
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            //css
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "../",
            },
          },
          "css-loader",
        ], //将css作为字符串加载到js中,发布的时候后用这个，缓存！
        // use: ["style-loader", "css-loader"], //放入style标签，将css作为字符串加载到js中
      },
    ],
  },
};
