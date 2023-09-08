import './App.css';
import videosDB from './data/data';
import { useContext, useReducer, useState } from 'react';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';
import ThemeContext from './context/ThemeContext';

function App() {

  const [editableVideo, setEditableVideo] = useState(null)
  const [mode, setMode] = useState('darkMode');

  function videoReducer(videos, action){
    switch(action.type){
      case 'ADD':
        return [
            ...videos,
            {...action.payload, id: videos.length+1}
          ]
        case 'DELETE':
          return videos.filter(video=>video.id!==action.payload)

        case 'UPDATE':
          const index = videos.findIndex(v=>v.id===action.payload.id)
          const newVideos = [...videos]
          newVideos.splice(index,1,action.payload)
          setEditableVideo(null)
          return newVideos
      default:
        return videos
    }
  }

  const [videos, dispatch] = useReducer(videoReducer,videosDB)

  const themeContext = useContext(ThemeContext);
  console.log({themeContext});
  
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }
  
  return (
    <ThemeContext.Provider value={mode}>
    <div className={`App ${mode}`} onClick={()=>console.log('App')}>
      <button onClick={()=>setMode(mode==='darkMode'? 'lightMode':'darkMode')}>Mode</button>
      <div className='video'> Videos </div>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>      
      <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
