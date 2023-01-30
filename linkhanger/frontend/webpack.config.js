const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");
module.exports = {
  // devServer: {
  //   static: {
  //     static: path.resolve(__dirname, "./static/frontend"),
  //     filename: "[name].js",
  //     hot: true,
  //   },
  //   compress: true,
  // },

  entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "./static/frontend"),
  //   filename: "[name].js",
  // },
  output: {
    path: path.resolve("./assets/webpack_bundles/"),
    filename: "[name]-[hash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new BundleTracker({ filename: "./webpack-stats.json" }),
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_SERVER_ENDPOINT: JSON.stringify("http://127.0.0.1:8000"),
      },
    }),
  ],
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       "process.env": {
  //         // This has effect on the react lib size
  //         NODE_ENV: JSON.stringify("production"),
  //       },
  //     }),
  //   ],
};
