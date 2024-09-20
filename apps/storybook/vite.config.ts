import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/index.ts'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
