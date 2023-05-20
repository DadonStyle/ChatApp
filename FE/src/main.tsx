import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SocketProvider from "./socketContext/socket.context";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SocketProvider>
      <App />
      <ToastContainer />
    </SocketProvider>
  </React.StrictMode>,
)
