// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for src
      '@': path.resolve(__dirname, './src'),
      // Alias for assets
      '@assets': path.resolve(__dirname, './src/assets'),
      // Alias for components
      '@components': path.resolve(__dirname, './src/components'),
      // Alias for images images
      '@images': path.resolve(__dirname, './src/assets/images'),
      // Alias for project images
      '@project-images': path.resolve(__dirname, './src/assets/images/Projects'),
    }
  }
})