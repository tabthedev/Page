import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App1 from './birthday-2025/main.jsx';
import App from './App.jsx'
import App2 from './birthday-2026/main.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/birthday-2025" element={<App1/>}></Route>
        <Route path="/birthday-2026" element={<App2/>}></Route>

        <Route path="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)