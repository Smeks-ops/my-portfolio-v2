import path from 'path';

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist'
  },
  Plugin: ['vite-plugin-ssr'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};
