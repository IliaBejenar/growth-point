import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/openai': {
        target: 'https://api.openai.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/openai/, ''),
      },
    },
  },
})
