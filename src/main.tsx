import { createRoot } from 'react-dom/client'
import { App } from "./app"
import { ErrorBoundary } from "./app/providers/ErrorBoundary"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "./app/providers/StoreProvider"

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                    <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider> 
)
