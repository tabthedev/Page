import { Link } from 'react-router-dom'
import ThemeColoredImg from '../ThemeColoredImg'
import './StickyHeader.css'

export default function v1_StickyHeader(content) {
    // document.querySelector("#root").style.

    return <header id="v1_StickyHeader" style={{
        display: "flex",
        position: "sticky",
        width: "100% -12px",
        top: 0,
    }}>
        <div id='v1_StickyHeader_leftContainer'>
            {content}
        </div>
        <div id='v1_StickyHeader_rightContainer'>
            <Link to="https://github.com/tabthedev">
                <ThemeColoredImg src="/GitHub_Logos/SVG/GitHub_Invertocat_White.svg" style={{
                    height: "1.8em"
                }} />
            </Link>
        </div>
    </header>
}