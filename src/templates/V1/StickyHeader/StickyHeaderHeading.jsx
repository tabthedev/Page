export default function v1_StickyHeaderHeading(headingContent) {
    return <p style={{
        fontWeight: "600",
        fontSize: "1.8em",
        lineHeight: "1",
        margin: "0",
        textAlign: "left",
        color: "rgba(245, 245, 245, .8)"
    }}>
        {headingContent}
    </p>
}