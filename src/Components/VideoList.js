import React from 'react';
import Video from './Video';
import PlayButton from './PlayButton';

function VideoList({videos}) {
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
        verified={video.verified}>

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
