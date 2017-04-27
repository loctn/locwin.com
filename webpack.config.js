'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = module.exports = {
  entry: {
    portfolio: path.resolve(__dirname, './app')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [
      {  // CSS Modules
        test: /\.css$/,
        exclude: /some-folder/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
        })
      },
      /*  {  // Global styles
        test: /\.css$/,
        include: /some-folder/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },  */
      {
        test: /\.(png|jpg|woff)$/,
        loader: 'url-loader?limit=10240'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app/components')
    },
    extensions: ['.js', '.jsx']
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    ...config.plugins,
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ];
}