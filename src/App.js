import './App.css';
import PlayButton from './Components/PlayButton';
import Video from './Components/Video';
import videosDB from './data/data';
import Counter from './Components/Counter';
import { useState } from 'react';
import Clock from './Components/Clock';

function App() {

  const [videos, setVideos] = useState(videosDB)
  
  return (
    <div className='App' onClick={()=>console.log('App')}>
      
      <div className='video'> Videos </div>
      <Clock></Clock>
      <div>
        <button onClick={()=>{
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
        }}>Add Video</button>
      </div>
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
      
      <div style={{clear:"both"}}>
        {/* <PlayButton message='play-msg' onPlay={()=>console.log('play')} onPause={()=>console.log('pause')}>Play</PlayButton> */}
        {/* <PlayButton message='pause-msg' onClick={()=>alert('pauseee')}>Pause</PlayButton> */}
      </div>

      <Counter></Counter>

      
    </div>
  );
}

export default App;
