import { useState } from 'react';
import './App.css';

import { data } from './assets/data.json';

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

function App() {
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

    return <acticle id='bdayMessage_Container'>
      <p id="bdayMessage_Sender">이름 : {object.name} <sup>({object.nameType})</sup></p>
      <p id="bdayMessage_TimeSent">시각 : {FormatHour(hour)} {min}분</p>
      <article id="bdayMessage_Description">
        {descriptions}
      </article>
    </acticle>
  }
  )

  return (
    <>
      <header>
        <h2 style={ {
          textAlign: align,
          display: 'block',
          width: '100%',
        } }>
          <a className='birthdate'>
            {pf}
          </a>
          태희 생일 축하해준 사람들 
          <a className='birthdate'>
            {af}
          </a>
        </h2>
      </header>

      <section>
        {birthdayMessageElements}
      </section>
    </>
  )
}

export default App