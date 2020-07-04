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
  //scss
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"], //把文件变成文件路径
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: { implementation: require("dart-sass") },
          },
        ],
      },
    ],
  },
};
