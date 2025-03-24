import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Landing.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './components/Base.jsx';
import Landing from './Landing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
