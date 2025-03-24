import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/Count.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './components/Base.jsx';
import Landing from './components/Landing.jsx';
import Count from './components/Count.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Landing />} />
          <Route path="count" element={<Count />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
