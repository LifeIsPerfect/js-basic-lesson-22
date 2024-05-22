const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    ],
  },
  entry: {
    chat: './src/chat/chat.js',
    al: './src/articles-list/al.js',
  },
  output: {
    /* filename: 'main.js', */
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    /* new HtmlWebpackPlugin({
      template: './src/chat/chat.html',
    }), */
    new HtmlWebpackPlugin({
      template: './src/articles-list/al.html',
      filename: 'al.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/chat/chat.html',
      filename: 'chat.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
