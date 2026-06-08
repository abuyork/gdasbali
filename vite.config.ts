import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Proxy resort media so the browser requests same-origin /wp/* paths and never
  // hits the WordPress host directly (which blocks cross-domain hotlinks).
  // Netlify mirrors this rule in public/_redirects for production.
  server: {
    proxy: {
      '/wp': {
        target: 'https://gdasbali.com/wp-content/uploads',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/wp/, ''),
      },
    },
  },
  preview: {
    proxy: {
      '/wp': {
        target: 'https://gdasbali.com/wp-content/uploads',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/wp/, ''),
      },
    },
  },
  build: {
    // Split vendor chunks so first paint stays light.
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
