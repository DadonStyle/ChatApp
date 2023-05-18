/// <reference types="vite/client" />
import { defineConfig, loadEnv  } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return {
    plugins: [react()],
    server: {
      port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 5000,
    },
}
})
