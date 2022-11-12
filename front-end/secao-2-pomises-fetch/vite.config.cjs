const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        superheros: './super-heroes.html',
        pets: './random-pets.html'
      }
    }
  }
});