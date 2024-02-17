import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  base: '/Games.React/',
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return assetInfo.name === 'index.html' ? 'index.html' : `assets/${assetInfo.name}`;
        },
        chunkFileNames: `assets/[name]-[hash].js`,
        entryFileNames: `assets/[name]-[hash].js`,
      },
    },
  },
};