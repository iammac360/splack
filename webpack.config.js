'use strict';  
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './web/static')
];

module.exports = {  
  devtool: 'source-map',
  entry: {
    "app": ["./web/static/css/app.scss", "./web/static/js/app.js"],
  },
  output: {
    path: "./priv/static/",
    filename: "js/app.js"
  },
  resolve: {
    root: path.resolve(__dirname) + '/web/static/',
    alias: {
      containers: 'js/containers',
      actions: 'js/actions',
      constants: 'js/constants',
      components: 'js/components',
      reducers: 'js/reducers',
      store: 'js/store',
      css: 'css',
      utils: 'js/utils'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel?presets[]=react,presets[]=es2015'
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules\/(?!(stardust))/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        plugins: [
          'transform-runtime',
          'add-module-exports',
          'transform-decorators-legacy',
        ],
        presets: ['es2015', 'react', 'stage-1', 'stage-2', 'stage-3'],
      },
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000' 
    }, {
      test: /\.json$/, 
      loader: 'raw-loader' 
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/app.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:4000'), 
      },
    }),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
