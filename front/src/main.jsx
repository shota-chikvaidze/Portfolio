import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScrollToTop } from './components/scrollToTop/ScrollToTop.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <Router>
        <QueryClientProvider client={queryClient}>
            <ScrollToTop />
            <App />
        </QueryClientProvider>
    </Router>
)
