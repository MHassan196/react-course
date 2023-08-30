import './App.css';
import PlayButton from './Components/PlayButton';
import Video from './Components/Video';
import videos from './data/data';

function App() {
  
  return (
    <div className='App' onClick={()=>console.log('App')}>
      <div className='video'> Videos </div>
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

      
    </div>
  );
}

export default App;
