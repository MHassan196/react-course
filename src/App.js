import './App.css';
import Video from './Components/Video';
import videos from './data/data';
import List from './Components/List';

function App() {
  
  return (
    <div className='App'>
      <div className='video'> Videos </div>
      {/* {
      videos.map(video=><Video 
        key={video.id}
        id={video.id}
        title={video.title} 
        channel={video.channel} 
        views={video.views} 
        time={video.time} 
        verified={video.verified}>

      </Video>)
      } */}

      {
        <div>
        < List layout="numbered" items={videos}/> 
        < List layout="alpha"  items={videos}/> 
        < List layout="circle"   items={videos}/>
        </div>
      }
      

      
    </div>
  );
}

export default App;
