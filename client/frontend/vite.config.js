import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    Icons({
      /* optional config */
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Proxy Frappe backend
    },
  },
})
