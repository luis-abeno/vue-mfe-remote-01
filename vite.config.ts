import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry01.js',
      exposes: {
        './RemoteButton': './src/components/RemoteButton.vue',
        './Remote01HomeView': './src/views/Remote01HomeView.vue',
        './Remote01SubrouteView': './src/views/Remote01SubrouteView.vue',
        './App': './src/App.vue'
      },
      shared: ['vue']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3001
  }
})
