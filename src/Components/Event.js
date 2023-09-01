import React, { useState } from 'react'

function Event() {
    const [over, setOver] = useState(false)
    const handleMouseOver = () => {
        setOver(true);
        console.log('MouseOver')
    }
    const handleMouseOut = () => {
        setOver(false);
        console.log('MouseOut')
    }
    const handleDoubleClick = () => {
        alert("Double Clicked");
    }
    const handleClick = () => {
        console.log("Single Click");
    }
    const focus = (e) => {
        e.stopPropagation()
        console.log("Focused On the Text Box");
    }
    const blur = (e) => {
        e.stopPropagation()
        console.log("Out of the text box");
    }
    const cut = (e) => {
        console.log(e.target.value);
    }
    const paste = (e) => {
        console.log(e.target.value);
    }
    const copy = (e) => {
        console.log(e.target.value);
    }
    const onClose = () => {
        window.close();
    }
    const keyDown = (e) => {
        console.log(e)
        if(e.keyCode===13){
            console.log('Submit');

        }
    }
  return (
    <div style={{clear:'both'}}>
      <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={over? {transform: 'scale(1.5)'}:{}} src="https://picsum.photos/id/4/160/90" alt="" />
      <button onDoubleClick={handleDoubleClick} onClick={handleClick}>Submit</button>
      <button onClick={onClose}>Close</button>
      <input onKeyDown={keyDown} onCut={cut} onPaste={paste} onCopy={copy} onFocus={focus} onBlur={blur} type="text" />
    </div>
  )
}

export default Event
