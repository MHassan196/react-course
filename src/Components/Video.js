import React, { useContext } from 'react'
import './Video.css'
import ThemeContext from '../context/ThemeContext'

function Video({title,id, channel="CodeWithMe", views, time, verified, children, dispatch,editVideo}) {
  const theme = useContext(ThemeContext)
  return (
    <>
    <div className={`container ${theme}`}>
      <div className="pic">
        <button className='close' onClick={()=>dispatch({type:'DELETE', payload:id})}>X</button>
        <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="" />
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
