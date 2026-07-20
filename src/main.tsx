import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.tsx'
import { ErrorMessageContextProvider } from './context/ErrorMessageContextProvider.tsx'
import { LoadingContextProvider } from './context/LoadingContextProvider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ErrorMessageContextProvider>
          <LoadingContextProvider>
            <App />
          </LoadingContextProvider>
        </ErrorMessageContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

