import { Link } from 'react-router-dom'
import ThemeColoredImg from '../ThemeColoredImg'
import './StickyHeader.css'

export default function StickyHeader(content) {
    return <div id="v1_StickyHeader">
        {content}
        <Link to="https://youtube.com">{ThemeColoredImg("/icon1.png")}</Link>
    </div>
}