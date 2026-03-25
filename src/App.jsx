import { Routes, Route, Link, HashRouter } from "react-router-dom";
import { StickyHeader } from "./StickyHeader.jsx";

import './index.css'

import { Bday2025 } from './Bday2025.jsx'
import { Birthday2026 } from './Birthday2026.jsx'
import { MinatoGallery } from "./MinatoGallery.jsx";



function Home() {
  const Header = StickyHeader(<h1>
    넣을게 없다
  </h1>)

  return <>
    {Header}
    <br />
    <h2 style={{
      marginBottom: "5px"
    }}>프로필</h2>
    <Link to="https://www.github.com/tabthedev">깃허브</Link>
    <br />
    <h2 style={{
      marginBottom: "5px"
    }}>관상용</h2>
    <Link to="birthday-2025-legacy">2025 생일 (레거시)</Link>
    <br />
    <Link to="birthday-2026">2026 생일</Link>
    <br />
    <br />
    <Link to="minato-my-beloved">미나토 갤러리</Link>
  </>
}


function App() {
  return <>
    
    <HashRouter>
      <Routes>
        <Route path="/birthday-2025-legacy" element={<Bday2025/>}></Route>
        <Route path="/birthday-2026" element={<Birthday2026/>}></Route>
        <Route path="/minato-my-beloved" element={<MinatoGallery/>}></Route>

        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </HashRouter>
  </>
}

export default App