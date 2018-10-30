module.exports = {
  devServer: {
    port: 3001,
    proxy: 'http://127.0.0.1:3000'
  },

  lintOnSave: undefined
}
