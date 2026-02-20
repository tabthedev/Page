import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";

import './index.css'
import './assets/bday2025.css'
import './assets/bday2026/App.css'

import { data } from './assets/bday2026/data.json';

function FormatHour(hour){
  let prefix = ''

  if (hour < 12) {
    prefix = '오전 '
  } else {
    prefix = '오후 '
    hour -= 12
  }

  if (hour == 0) {
    hour += 12
  }

  return prefix+hour+'시'
}

function Birthday2026() {
  let align

  let pf = ''
  let af = ''

  const tempRand01 = Math.random()

  if (tempRand01 < 0.333) {
    align = "left"
    af = " (2026. 02. 06.)"
  } else if (tempRand01 < 0.667) {
    align = "center"
    af = " (2026. 02. 06.)"
  } else {
    align = "right"
    pf = "(2026. 02. 06.) "
  }


  const birthdayMessageElements = data.map((object)=>{
    let hour = Math.floor(object.offsetFromStart/60)
    let min = object.offsetFromStart%60

    const descriptions = object.description.map((v)=>{
      return <p id="bdayMessage_descriptionText">{v}</p>
    })
    
    const links = object.links.map((v)=>{
      return <a href={v.href} target='_blank' id="bdayMessage_Link">{v.name}</a>
    })

    const [imageIndex, setImageIndex] = useState(0);

    const attachments = object.files.map((path, index)=>{
      // return <img src={`/bday2026/${path}`} alt="" style={{
      //   "width": "100%",
      //   "height": "100%",
      //   "backgroundSize": "cover"
      // }} />

      return <img src={`bday2026/${path}`} style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "cover",
        "overflow": "hidden",
        "cursor": "pointer",
        "borderRadius": "10px",
        "padding": "0 2px 0 2px"
      }} />
    })

    return <article id='bdayMessage_Container' onClick=''>
      <p id="bdayMessage_Sender">이름 : {object.name} <sup>({object.nameType})</sup></p>
      <p id="bdayMessage_TimeSent">시각 : {FormatHour(hour)} {min}분</p>
      <article id="bdayMessage_Description">
        <article id="bdayMessage_justifyTop" style={ { "height": "80%" } }>
          {descriptions}
          <div id="imageContainer" style={{
            "height": "100px",
            "display": "flex",
            "borderRadius": "8px"
          }}>
            {attachments}
          </div>
        </article>
        <article id="bdayMessage_justifyBottom" style={ {"height": "20%"} }>
          {links}
        </article>
      </article>
    </article>
  }
  )

  return (
    <div className='bday2026'>
      <header>
        <div style={{
          "width": "100%",
          "padding": "0 20px 0 20px"
        }}>
          <h2 style={ {
            textAlign: align,
            display: 'block',
            width: '100%',
          } }>
            <div className='birthdate'>
              {pf}
            </div>
            태희 생일 축하해준 사람들 
            <div className='birthdate'>
              {af}
            </div>
          </h2>
        </div>
      </header>

      <section>
        {birthdayMessageElements}
      </section>
    </div>
  )
}

function Birthday2025() {
  return (
    <div style={{"backgroundColor": "rgb(50,50,60)", "margin": "10px 0 0 0"}} className='bday2025Root'>
    <h1 style={{"fontSize": "2em"}}>태희 생일 축하해준 사람들 <sub style={{"fontSize": "small"}}>(2025.02.06)</sub></h1>
    <ul class="TargetTable">
        <li id="time">(R) : 실친</li>
        <li id="time">(C) : 커뮤인</li>
        <br/>
        <li>임준렬 <a id="time">(R) AM 12:01</a> - 얘도 오늘 생일</li>
        <li>유하종 <a id="time">(R) AM 12:03</a> - 롯데리아 버거 선물</li>
        <ul style={{"paddingLeft": "10px", "marginBottom": "0"}}>
            <li>양성재 <a id="time">(R) AM 12:27</a></li>
            <li>박예나 <a id="time">(R) AM 12:27</a></li>
        </ul>
        <li>김서은 <a id="time">(R) AM 12:55</a></li>
        <li>이예주 <a id="time">(C) AM 01:02</a> - 10000원 송금</li>
        <li>나윤서 <a id="time">(R) AM 01:39</a></li>
        <li>김현우 <a id="time">(R) AM 07:11</a></li>
        <li>이호준 <a id="time">(R) AM 10:31</a></li>
        <ul style={{"paddingLeft": "10px", "marginBottom": "0"}}>
            <li>유담 <a id="time">(R) AM 11:10</a></li>
            <li>유건 <a id="time">(R) PM 10:34</a></li>
        </ul>
        <li>김정훈 <a id="time">(R) PM 12:12</a></li>
        <li>수리 <a id="time">(R|C) PM 12:14</a></li>
        <li>데이비드 <a id="time">(C) PM 04:46</a></li>
        <li>김준우 <a id="time">(R) PM 04:52</a> - 귀여운 4학년</li>
        <li>박스 <a id="time">(C) PM 05:12</a></li>
        <li><a href="https://www.youtube.com/@%EC%96%91%EC%84%B8%EB%8F%8C">양세돌</a> <a id="time">(C) PM 06:15</a> - 깊카 5만원권 선물</li>
        <li>포인 <a id="time">(C) PM 06:33</a></li>
        <li>뉴비맨 <a id="time">(C) PM 08:49</a></li>
        <li>스제 <a id="time">(C) PM 11:13</a></li>
        <li>얼음밤 <a id="time">(C) PM 11:23</a></li>
        <li>기나재 <a id="time">(C) PM 11:29</a></li>
    </ul>

    <h1 style={{"fontSize": "2em"}}>축하메시지 모음</h1>
    <div class="PicGroup">
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/01.png" alt="임준렬" />
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/02.png" alt="하종 형"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/03.png" alt="양성재 & 박예나 & 수리"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/04.png" alt="김서은 (서곶초 예비 6학년)"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/05.png" alt="이예주"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/06.png" alt="나윤서"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/07.png" alt="김현우"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/08.png" alt="이호준"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/09.png" alt="유담"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/10.png" alt="유건"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/11.png" alt="김정훈"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/12.png" alt="데이비드"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/13.png" alt="김준우"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/14.png" alt="박스"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/15.png" alt="양세돌"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/16.png" alt="포인"/>
        <img src="https://NOTTABTHEDEVANYMORE.github.io/main/BDAY2025/17.png" alt="뉴비맨"/>
    </div>
</div>
  )
}

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
        <Route path="/birthday-2025" element={<Birthday2025/>}></Route>
        <Route path="/birthday-2026" element={<Birthday2026/>}></Route>

        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </HashRouter>
  </>
}

export default App