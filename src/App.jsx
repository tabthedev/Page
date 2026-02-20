import { Routes, Route, Link, HashRouter } from "react-router-dom";

import './index.css'

import { Bday2025 } from './Bday2025.jsx'
import { Birthday2026 } from './Birthday2026.jsx'

function Home() {
  return <>
    <h1>넣을게 없다</h1>
    <br />
    <Link to="birthday-2025">2025 생일</Link>
    <br />
    <Link to="birthday-2026">2026 생일</Link>
  </>
}


function App() {
  return <>
    
    <HashRouter>
      <Routes>
        <Route path="/birthday-2025" element={<Bday2025/>}></Route>
        <Route path="/birthday-2026" element={<Birthday2026/>}></Route>

        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </HashRouter>
  </>
}

export default App