const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
const buildDirectory = 'dist'

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed

// reduce it to a nice Object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, buildDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader']
      }, {
        test: /\.(sass|scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', require.resolve('sass-loader')]
      }, {
        test: /\.(ico|png|svg|jpg|gif|JPG|mp4)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.ttf$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: 'src/assets/images/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new webpack.DefinePlugin(envKeys),
    new CopyPlugin([
      '.htaccess'
    ])
  ]
}
