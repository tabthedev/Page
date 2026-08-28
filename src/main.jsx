import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, Link, HashRouter } from "react-router-dom";

import StickyHeader from "./templates/designV0/StickyHeader.jsx";

import './templates/V1/v1.css'
import { Bday2025 } from "./pages/birthday/2025/Bday2025.jsx";
import { Birthday2026 } from "./pages/birthday/2026/Birthday2026.jsx";

import { MinatoGallery } from "./pages/minato/minatoGallery/MinatoGallery.jsx";

import { MinitoBot_MainPage } from "./pages/minato/minitoBot/MainPage.jsx";
import { MinitoBot_TermsOfService } from "./pages/minato/minitoBot/TermsOfService.jsx";
import { MinitoBot_PrivacyPolicy } from "./pages/minato/minitoBot/PrivacyPolicy.jsx";
import Redirect from "./templates/designV0/Redirect.jsx";
import Portfolios from "./pages/portfolios/Portfolios.jsx";
import BirthdayPage_Hina2026 from "./pages/birthday/2026/hina/hinaBDay2026.jsx";

import './index.css'

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

    <h2 style={{
      marginBottom: "5px"
    }}>관상용</h2>
    <Link to="birthday-2025-legacy">2025 생일 (레거시)</Link>
    <br />
    <Link to="birthday-2026">2026 생일</Link>
    <br />
    <br />
    <Link to="minato-my-beloved">미나토 갤러리</Link>
    
    {/* <h2 style={{
      marginBottom: "5px"
    }}>미니토 디스코드 봇</h2>
    <Link to="minito-bot">봇 링크</Link>
    <br />
    <Link to="minito-bot/privacy-policy">개인정보처리방침 (영문)</Link>
    <br />
    <Link to="minito-bot/terms-of-service">이용약관 (영문)</Link> */}
  </>
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/*" element={Redirect("./")}></Route>

        <Route path="/birthday/2025-legacy" element={<Bday2025/>}></Route>
        <Route path="/birthday/2026" element={<Birthday2026/>}></Route>
        <Route path="/birthday/hina-2026" element={<BirthdayPage_Hina2026/>}></Route>

        <Route path="/minato-my-beloved" element={<MinatoGallery/>}></Route>

        <Route path="/minito-bot" element={<MinitoBot_MainPage/>}></Route>
        <Route path="/minito-bot/privacy-policy" element={<MinitoBot_PrivacyPolicy/>}></Route>
        <Route path="/minito-bot/terms-of-service" element={<MinitoBot_TermsOfService/>}></Route>

        <Route path="/portfolios" element={<Portfolios/>}>
        
        </Route>
      </Routes>
    </HashRouter>
  // </StrictMode>,
)