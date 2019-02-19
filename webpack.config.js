var path = require("path");
var extractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebPackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var extractPlugin = new extractTextPlugin({
  filename: "main.css"
});

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    //publicPath: "/dist"          don't need this anymore cos html now is also in dist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpeg|png)$/,
        use: [
          {
            loader: "file-loder",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //this injects js bundle in a script in body and main.css in a link in head
    extractPlugin,
    new HtmlWebPackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};
