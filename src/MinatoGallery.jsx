import { ImageViewer } from "./ImageViewer.jsx";
import { StickyHeader } from "./StickyHeader.jsx";

import { data } from './assets/minatoGallery/data.json';
import './assets/minatoGallery/App.css';

function MinatoGallery() {
    const [ImageViewerElement, OpenImage] = ImageViewer();


  const Header = StickyHeader(<h1 style={ {
    textAlign: 'center',
    display: 'block',
    width: '100%',
  } }>
    미나토 갤러리
  </h1>)

  const Images = data.map((object)=>{
    const imagePath = `minatoGallery/images/${object.path}`
    const Image = <div style={{
        "width": "100%",
        "height": "84%",
        "margin": "10px 2px 0 2px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
        
      }}>
      <img src={imagePath} style={{
        width: "100%",
        height: "100%",
        "objectFit": "contain",
        "cursor": "pointer",
        "borderRadius": "10px",
      }} onClick={OpenImage(0, [imagePath])}/>

      
    </div>

    return <article id='mgallery_imageContainer' onClick=''>
      {object.artName}
      <br />
      <div id={'thinnerText'}>( by {object.author} )</div>
        {Image}
    </article>
  }
  )

    return <div className="MinatoGallery">
        {Header}
        {ImageViewerElement}

        
      <section id="mgallery_Gallery">
        {Images}
      </section>
    </div>
}


export {MinatoGallery}