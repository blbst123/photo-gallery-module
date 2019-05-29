const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/src/PhotoCarousel'),
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[sha1:hash:hex:8]'
            }
          }
        ],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/dist')
  }
};
