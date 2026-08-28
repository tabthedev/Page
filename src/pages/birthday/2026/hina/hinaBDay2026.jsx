import { useEffect, useState } from "react";
import v1_StickyHeader from "/src/templates/V1/StickyHeader/StickyHeader";
import v1_StickyHeaderHeading from "/src/templates/V1/StickyHeader/StickyHeaderHeading";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function BirthdayPage_Hina2026() {
    const [catLeft, setCatLeft] = useState(256);
    const [catTop, setCatTop] = useState(512);

    const [isPlaying, setPlaying] = useState(false);

    function PlayMeow() {
        if (isPlaying) {
            return;
        }
        setPlaying(true);
        const query = `.hina2026_meow0${getRandomInt(4)+1}`
        const audioElement = document.querySelector(query)
        audioElement.play();
        console.log(query, audioElement);
        setTimeout(()=>{
            setPlaying(false);
        }, 600)
    }

    useEffect(()=>{
        const root = document.getElementById('root');
        const width = root.offsetWidth;

        const catE = document.querySelector('.hina2026_cat');
        
        setTimeout(()=>{
            setCatLeft(Math.random() * (width - catE.offsetWidth));
        }, Math.random() * 3000 + 4000);
    }, [catLeft])

    useEffect(()=>{
        const root = document.getElementById('root');
        const height = root.offsetHeight;

        const catE = document.querySelector('.hina2026_cat');
        
        setTimeout(()=>{
            setCatTop(Math.random() * (height - catE.offsetHeight));
        }, Math.random() * 3000 + 4000);
    }, [catTop])


    console.log("yo")

    return (<>
        <audio src={`/bday2026/hina/assets/cat01.wav`} className={"hina2026_meow01"} />
        <audio src={`/bday2026/hina/assets/cat02.wav`} className={"hina2026_meow02"} />
        <audio src={`/bday2026/hina/assets/cat03.wav`} className={"hina2026_meow03"} />
        <audio src={`/bday2026/hina/assets/cat04.wav`} className={"hina2026_meow04"} />
        {v1_StickyHeader(v1_StickyHeaderHeading("우냐냥"))}

        <button style={{
            display: "block",
            position: "absolute",
            left: catLeft,
            top: catTop,
            maxWidth: "256px",
            maxHeight: "256px",
            background: "none",
            border: "none",
            transition: "2s"
        }} onClick={PlayMeow} className="hina2026_cat">
            
            <img src="/bday2026/hina/assets/ya_ong3.webp" alt="야옹~" style={{
                display: "block",
                height: "100%",
                width: "100%"
            }} />

        </button>
    </>)
}