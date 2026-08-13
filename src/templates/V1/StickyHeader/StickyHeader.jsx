import { Link } from 'react-router-dom'
import ThemeColoredImg from '../ThemeColoredImg'
import './StickyHeader.css'

export default function StickyHeader(content) {
    return <header id="v1_StickyHeader" style={{
        display: "flex",
        position: "fixed",
        width: "100%",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        margin: "auto"
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