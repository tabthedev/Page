import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <>
    <h1>넣을게 없다</h1>
    <br />
    <Link to="birthday-2025">2025 생일</Link>
    <br />
    <Link to="birthday-2026">2026 생일</Link>
  </>
}

function bb() {
  return <>
    <h1>앙</h1>
  </>
}



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/birthday-2025" element={<bb/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App