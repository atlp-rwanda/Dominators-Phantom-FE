const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const dontenv = require("dotenv");
dontenv.config();
const port = process.env.PORT;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: port || 8080,
  },
  mode: "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx|js?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
