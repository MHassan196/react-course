import './App.css';
import videosDB from './data/data';
import { useState } from 'react';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';

function App() {

  const [videos, setVideos] = useState(videosDB)
  const [editableVideo, setEditableVideo] = useState(null)

  function addVideos(video){
    setVideos([
      ...videos,
      {...video, id: videos.length+1}
    ])
  }
  function deleteVideo(id){
    // console.log(id)
    setVideos(videos.filter(video=>video.id!==id))
  }
  function editVideo(id){
    // console.log(id)
    setEditableVideo(videos.find(video=>video.id===id))
  }
  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }
  
  return (
    <div className='App' onClick={()=>console.log('App')}>
      <div className='video'> Videos </div>
      <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>      
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      
    </div>
  );
}

export default App;
