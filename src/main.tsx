import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { FinanceApp } from './FinanceApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinanceApp/>
  </StrictMode>,
)
