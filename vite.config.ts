import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      lib: {
        entry: [
          resolve(__dirname, 'src/index.js'),
          resolve(__dirname, 'src/provider.js'),
          resolve(__dirname, 'src/pack.js'),
          resolve(__dirname, 'src/utils.js'),
        ],
        name: 'stameska-icon',
        fileName: (format, name) => {
          if (format === 'es') return `${name}.js`;
          return `${name}.${format}`;
        },
      },
      rollupOptions: {},
    },
  };
});
