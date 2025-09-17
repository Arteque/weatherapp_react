import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Styling
import '../styles/index.css'

//Components
import App from './pages/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
