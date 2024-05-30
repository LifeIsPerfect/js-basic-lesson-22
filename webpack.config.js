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
    al: './src/blog/articles-list/al.js',
    article: './src/blog/article/al.js',
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
    new HtmlWebpackPlugin({
      template: './src/blog/articles-list/al.html',
      filename: 'al.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/blog/article/article.html',
      filename: 'article.html',
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
