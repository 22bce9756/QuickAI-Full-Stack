import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const FRONTEND_API = import.meta.env.VITE_CLERK_FRONTEND_API;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    frontendApi={FRONTEND_API}
    afterSignOutUrl="/"
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
