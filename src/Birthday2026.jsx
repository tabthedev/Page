import { ImageViewer } from './ImageViewer.jsx'

import { data } from './assets/bday2026/data.json';
import './assets/bday2026/App.css'

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
  const [ImageViewerElement, setIsViewerActive, setImageIndex, setImageList] = ImageViewer();

  function OpenImage(index, list) {
    return function() {
      setImageIndex(index)
      setImageList(list)
      setIsViewerActive(true)
    }
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

    const attachments = object.files.map((path, index, arr)=>{
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
        "margin": "0 2px 0 2px"
      }} onClick={OpenImage(index, arr)}/>
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
            textAlign: 'center',
            display: 'block',
            width: '100%',
          } }>
            태희 생일 축하해준 사람들 
            <div className='birthdate'>
              {' ' + '(2026. 02. 06)'}
            </div>
          </h2>
        </div>
      </header>

      {ImageViewerElement}

      <section>
        {birthdayMessageElements}
      </section>
    </div>
  )
}

export {Birthday2026}