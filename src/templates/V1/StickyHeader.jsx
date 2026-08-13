export default function StickyHeader(content) {
    return <div style={{
        padding: "16px",
        height: "auto",
        backgroundColor: "rgb(0,0,0,.1)",
        borderBottom: "2px solid rgb(200,200,200,.3)",
    }}>
        {content}
    </div>
}