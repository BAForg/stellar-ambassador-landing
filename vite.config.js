import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
