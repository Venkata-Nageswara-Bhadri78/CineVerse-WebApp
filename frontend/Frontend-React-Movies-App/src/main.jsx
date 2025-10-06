import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { APIKeyProvider } from '../src/Context/ApiKeyProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIKeyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </APIKeyProvider>
  </StrictMode>,
)
