import React, { useEffect, useState } from 'react'
import './AddVideo.css'

function AddVideo({dispatch, editableVideo}) {

    const initialState = {
        channel: "CodeWithMe",
        time: "6 Month Ago",
        verified: true,
        title: '',
        views: ''
    }

    const [video, setVideo] = useState(initialState)

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(video);
        if(editableVideo){
            dispatch({type:'UPDATE', payload:video})
        }
        else{
            dispatch({type:'ADD', payload:video})
        }
        
        setVideo(initialState)
    }
    function handleChange(e) {
        // console.log(e.target.name, e.target.value);
        setVideo({...video, 
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        if(editableVideo){
            setVideo(editableVideo)
        }
    }, [editableVideo])
    return (
        <div>
            <form>
                <input type="text" name='title' placeholder='Title' onChange={handleChange} value={video.title} />
                <input type="text" name='views' placeholder='Views' onChange={handleChange} value={video.views} />
                <button onClick={handleSubmit}>{editableVideo? 'Edit' : 'Add'} Video</button>
            </form>
            {/* <button onClick={()=>{
          setVideos(
            [...videos,
              {id:videos.length+1,
              title: "ExpressJS Tutorial", 
              channel: "CodeWithMe", 
              views: "10M", 
              time: "6 Month Ago",
              verified: true
        }]
          )
        }}>Add Video</button> */}
        </div>
    )
}

export default AddVideo
