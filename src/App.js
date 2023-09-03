import './App.css';
import videosDB from './data/data';
import { useState } from 'react';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';
import DropDown from './Components/DropDown';
import Filtered from './Components/Filtered';

function App() {

  const [videos, setVideos] = useState(videosDB)

  function addVideos(video){
    setVideos([
      ...videos,
      {...video, id: videos.length+1}
    ])
  }
  
  return (
    <div className='App' onClick={()=>console.log('App')}>
      <div className='video'> Videos </div>
      <DropDown></DropDown>
      <Filtered items={videos}></Filtered>
      <AddVideo addVideos={addVideos}></AddVideo>      
      <VideoList videos={videos}></VideoList>
      
    </div>
  );
}

export default App;
