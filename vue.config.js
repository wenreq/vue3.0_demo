module.exports = {
  devServer: {
    port: 8008,
    open: false,
    compress: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: 'http://test.happymmall.com',
  },
}