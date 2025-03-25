import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/Count.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './components/Base.jsx';
import Landing from './components/Landing.jsx';
import Count from './components/Count.jsx';
import AuthenticatedRoute from './helpers/AuthenticatedRoute.jsx';
import { Navigate } from 'react-router-dom';
import { ClerkProvider } from "@clerk/clerk-react";
import Tite from './components/tite.jsx';

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Landing />} />
            <Route path="count" element={<Count />} />
            {/*<Route path="/count" element={<AuthenticatedRoute><Count /></AuthenticatedRoute>} />/*/}
            <Route path="tite" element={<Tite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
)
