import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/navbar.css'
import './css/footer.css'
import './css/cards.css'
import './css/login.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
