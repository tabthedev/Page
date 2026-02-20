function StickyHeader(elementToInsert) {
    return <>
      <div style={{
        display: "flex",
        marginBottom: "12px"
      }}>
        <div>
            {elementToInsert}
        </div>
      </div>
      <header style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgb(11,11,11)",
        width: "100%",
      }}>
        <div style={{
          "width": "100%",
          "padding": "0 20px 0 20px"
        }}>
            {elementToInsert}
        </div>
      </header>
    </>
}

export {StickyHeader}