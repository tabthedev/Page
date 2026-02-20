import { useState, useEffect } from 'react';

function ImageViewer() {
  const [isViewerActive, setIsViewerActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageList, setImageList] = useState([]);

  const container = <div className="ImageViewer" style={{
    // display: "flex",
    position: "fixed",
    bottom: isViewerActive ? "0%" : "100%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgb(11,11,11, .3)",
    // filter: "drop-shadow(0 0 12px rgb(11,11,11))",
    width: "100%",
    height: "100%",

    transition: "cubic-bezier(0,0,0.25,1) .5s"
  }}>

    <div style={{
      position: "absolute",
      placeContent: "center",
      width: "100%",
      height: "100%",
    }}>
      <img src={`bday2026/${imageList[imageIndex]}`} style={{
        "width": "auto",
        "height": "auto",
        "maxWidth": "500px",
        "maxHeight": "100%",
        "objectFit": "contain",
        "borderRadius": "10px",

        transition: "cubic-bezier(0,0,0.25,1) .3s"
      }} id='GlowOnHover' className='undraggable'/>
    </div>

    <div style={{
      position: "absolute",
      placeContent: "center",

      top: "12px",
      right: "12px",
      width: "64px",
      height: "64px",

      backgroundColor: "#242424",
      border: "2px",
      borderStyle: "solid",
      borderColor: "rgb(255,255,255, .4)",
      borderRadius: "8px",
      cursor: "pointer"
    }} onClick={function(){
      setIsViewerActive(false)
    }} className='undraggable'>
      닫기
    </div>

    <div style={{
      position: "absolute",
      placeContent: "center",

      top: "50%",
      right: imageList.length <= 1 ? "100%" : "12px",
      width: "64px",
      height: "64px",

      fontSize: "30px",
      filter: "drop-shadow(0 0 5px rgb(255,255,255, .5))",
      cursor: "pointer"
    }} onClick={function(){
      const currentIndex = imageIndex
      if (currentIndex >= imageList.length-1) {
        setImageIndex(0)
      } else {
        setImageIndex(currentIndex+1)
      }
    }} className='undraggable'>
      {">"}
    </div>

    <div style={{
      position: "absolute",
      placeContent: "center",

      top: "50%",
      left: imageList.length <= 1 ? "100%" : "12px",
      width: "64px",
      height: "64px",

      fontSize: "30px",
      filter: "drop-shadow(0 0 5px rgb(255,255,255, .5))",
      cursor: "pointer"
    }} onClick={function(){
      const currentIndex = imageIndex
      if (currentIndex == 0) {
        setImageIndex(imageList.length-1)
      } else {
        setImageIndex(currentIndex-1)
      }
      console.log(currentIndex, imageIndex)
    }} className='undraggable'>
      {"<"}
    </div>
  </div>

  return [container, setIsViewerActive, setImageIndex, setImageList]
}

export {ImageViewer}