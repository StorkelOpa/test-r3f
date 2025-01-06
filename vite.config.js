import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/IHR-REPOSITORY-NAME/', // Ersetzen Sie dies mit Ihrem tatsächlichen Repository-Namen
})