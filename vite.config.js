// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Visitor/', // 👈 IMPORTANT for GitHub Pages subpath
  plugins: [react()],
})
