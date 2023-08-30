import './App.css';
import Video from './Components/Video';

function App() {
  let obj = {
    title: "ReactJS Tutorial", 
    channel: "CodeWithMe", 
    views: "100K", 
    time: "1 Month Ago"
  }
  return (
    <div className='App'>
      <div className='video'> Videos </div>
      <Video {...obj}></Video>
      <Video title="NodeJS Tutorial" views="10K" time="1 Year Ago"></Video>
      <Video title="MongoDB Tutorial" channel="CodeWithMe" views="1M" time="1 Month Ago"></Video>
    </div>
  );
}

export default App;
