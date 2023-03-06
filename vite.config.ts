import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    //配置文件扩展名
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  // 打包配置
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['images/logos/mastercard-logo.png','images/logos/visa-logo.png'],
    }
  }
})
