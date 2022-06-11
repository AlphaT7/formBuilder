const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    static: ["./src/css"],
    compress: true,
    hot: false,
    port: 3000,
  },
  watchOptions: {
    ignored: "/node_modules/",
    poll: 1000, // Check for changes every second
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Form Builder",
      favicon: "src/favicon.ico",
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|webp|jpg|jpeg|json|txt|mp3)$/i,
        type: "asset/resource",
      },
      {
        test: /\.webmanifest$/i,
        use: "webpack-webmanifest-loader",
        type: "asset/resource",
      },
    ],
  },
};
