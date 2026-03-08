import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { TemporaryName } from './TemporaryName.tsx'

import './index.css'
import './styles/Layout.css'
import './styles/ui.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemporaryName />
  </StrictMode>,
)
