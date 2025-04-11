import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './gochoctap.css'

import './Card1.jsx'
import App from './gochoctap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
