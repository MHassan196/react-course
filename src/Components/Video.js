import React from 'react'
import './Video.css'

function Video({title,id, channel="CodeWithMe", views, time, verified, children, levels}) {
  return (
    <>
    <div className='container' onClick={()=>levels.push('Video')}>
      <div className="pic">
      <img onClick={()=>levels.push('Image')} src={`https://picsum.photos/id/${id}/160/90`} alt="" />
      </div>

      {/* <div className={bg} style={{backgroundColor: bgColor}}>{title}</div> */}
      <div className="title" >{title}</div>
      <div className="channel" >{channel} {verified? '✅' : null}</div>
      <div className="views" >{views} views <span>.</span> {time}</div>
      <div>
        {children}
      </div>
      </div>
    </>
  )
}

export default Video
