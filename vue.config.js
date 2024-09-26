const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  publicPath: './',
  filenameHashing: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    popup: {
      entry: 'src/popup/main.js',
      template: 'public/popup.html',
      filename: 'popup.html'
    }
  }
});