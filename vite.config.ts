import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Use a conditional base so the same repo can be deployed to GitHub Pages
// (base '/Kaemly/') and to Netlify (base '/'). Netlify sets the
// NETLIFY environment variable to 'true' during builds.
const basePath = process.env.NETLIFY ? '/' : '/Kaemly/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
