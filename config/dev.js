module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      compress: true,
      host: '0.0.0.0',
      port: 8088
    }
  }
}
