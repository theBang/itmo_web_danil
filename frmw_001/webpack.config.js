module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
};