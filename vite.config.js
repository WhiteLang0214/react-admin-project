import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  // 根据当前工作目录中的 mode 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 VITE_ 前缀
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: env.APP_ENV
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, "src")
        }
      ]
    },
  }
})
