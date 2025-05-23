import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      lib: {
        entry: [resolve(__dirname, 'src/index.js'), resolve(__dirname, 'src/provider.js')],
      },
      rollupOptions: {},
    },
  };
});
