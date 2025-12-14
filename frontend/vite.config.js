import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      // Proxy API requests to backend (adjust port if needed)
      '/generate': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      // Proxy redirect paths like /:id as-is to backend
      '^/(?:[a-zA-Z0-9_-]{5,})$': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
