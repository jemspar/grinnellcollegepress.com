const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  devServer: {
    contentBase: path.join(__dirname,'dest'),
    open: true,
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, 'dest'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.mdx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          },
          {
            loader: '@mdx-js/loader'
          }
        ]
      },
      {
        test: [/\.png$/, /\.jpg$/, /\.jpe?g$/, /\.svg$/, /\.ico$/],
        exclude: /node_modules/,
        use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.ya?ml$/,
        exclude: /node_modules/,
        use: {
          loader: 'js-yaml-loader'
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html',
      title: 'Grinnell College Press'
    }),
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
}),
  ],
};
