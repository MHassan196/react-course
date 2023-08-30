import React from 'react'
import './Video.css'

function Video({title, channel="CodeWithMe", views, time}) {
  return (
    <>
    <div className='container'>
      <div className="pic">
      <img src="https://picsum.photos/160/90" alt="" />
      </div>

      {/* <div className={bg} style={{backgroundColor: bgColor}}>{title}</div> */}
      <div className="title" >{title}</div>
      <div className="channel" >{channel}</div>
      <div className="views" >{views} views <span>.</span> {time}</div>
      </div>
    </>
  )
}

export default Video
