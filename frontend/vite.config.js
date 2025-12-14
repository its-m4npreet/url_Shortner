import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      // Proxy auth requests to backend
      '/auth': {
        target: 'https://url-shortner-s7at.onrender.com/',
        changeOrigin: true,
      },
      // Proxy API requests to backend (adjust port if needed)
      '/generate': {
        target: 'https://url-shortner-s7at.onrender.com/',
        changeOrigin: true,
      },
      // Proxy redirect paths like /:id as-is to backend
      '^/(?:[a-zA-Z0-9_-]{5,})$': {
        target: 'https://url-shortner-s7at.onrender.com/',
        changeOrigin: true,
      },
    },
  },
})
