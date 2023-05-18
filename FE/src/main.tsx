import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SocketProvider from "../context/socket.context";
import { useSockets } from '../context/socket.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>,
)