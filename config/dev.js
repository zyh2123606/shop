module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        pxtransform: {},
        url: {
          enable: true,
          config: {
            limit: 1024*1024
          }
        }
      }
    }
  },
  h5: {
    module: {
      postcss: {
        pxtransform: {
          enable: false,
          config: {
            /* pxtransform 配置项 */
          }
        }
      }
    },
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      compress: true,
      host: '0.0.0.0',
      port: 8088
    }
  }
}
