/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SOCKET_URL: number;
    readonly VITE_PORT: boolean;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }