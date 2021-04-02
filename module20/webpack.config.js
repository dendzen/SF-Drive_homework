const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/script.js',
  output: {
    filename: 'main.js',
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: 'eslint-loader',
      },
      {
        test: /\.(eot|ttf|woff|svg)$/i,
        use: ['file-loader'],
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              publicPath: '',
            },
          },
          'css-loader',
        ],
        test: /\.css$/,
      },
    ],
  },
};
