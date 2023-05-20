import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false
              }
            ]
          ]
        }
      })
    ],
    server: {
      port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 5000,
    },
    optimizeDeps: {
      exclude: ['babel-plugin-macros'],
    },
  }; // Add the closing bracket here
});