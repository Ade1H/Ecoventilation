import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Viktigt for Vercel
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  },
  server: {
    // Proxy for backend under utveckling
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
