import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist', // ensure this matches your expected output directory
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    chunkSizeWarningLimit: 500, // you can adjust this limit as needed
  },
});
