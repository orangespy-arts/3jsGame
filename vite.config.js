import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173, // 固定端口号
    strictPort: true, // 如果端口被占用，直接报错而不是尝试下一个端口
  },
});
