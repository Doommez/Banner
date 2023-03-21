const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development"
if (process.env.NODE_ENV === 'production'){
  mode = 'production';
}

const devMode = mode === 'development';

const devtool = devMode? 'source-map': undefined;

console.log('mode', mode);

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: "index[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: mode,
  devtool: devtool,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          devMode ? "style-loader": MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  experiments: {
    topLevelAwait: true
  }
}
