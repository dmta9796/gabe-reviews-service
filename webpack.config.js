const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/App.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader',
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]',
      //   },
      // },
      {
        test: /\.scss$/,
        loader: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
