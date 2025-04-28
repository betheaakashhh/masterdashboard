import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) {
              return 'react-router-dom'; // Ensure react-router-dom is bundled into its own chunk
            }
            return 'vendor'; // Group all other node_modules into a vendor chunk
          }
        },
      },
      external: ['react-router-dom'], // Explicitly mark react-router-dom as external
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 kB
  },
})
