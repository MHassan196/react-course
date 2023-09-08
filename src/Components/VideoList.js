// import React, { useContext } from 'react';
import React from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
// import videosContext from '../context/VideosContext';
import useVideos from '../hooks/Videos';

function VideoList({ editVideo}) {

  // const videos = useContext(videosContext)
  const videos = useVideos();
  return (
    <div>
      {
      videos.map(video=><Video 
        key={video.id}
        id={video.id}
        title={video.title} 
        channel={video.channel} 
        views={video.views} 
        time={video.time} 
        verified={video.verified}
        editVideo={editVideo}
        >

        <PlayButton 
          onPlay={()=>console.log('playing.. ',video.title)} 
          onPause={()=>console.log('paused.. ', video.title)}>
          {video.title}
        </PlayButton>

      </Video>)
      }
    </div>
  )
}

export default VideoList
