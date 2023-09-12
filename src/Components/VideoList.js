// import React, { useContext } from 'react';
import React, { useEffect, useContext } from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
// import videosContext from '../context/VideosContext';
import useVideos from '../hooks/Videos';
import useVideoDispatch from '../hooks/VideoDispatch';
import axios from 'axios';
import Papa from 'papaparse';

function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/videos.json?key=41409190";
  // const videos = useContext(videosContext)
  const videos = useVideos()
  const dispatch = useVideoDispatch();

  async function handleClick() {
    try {
      const res = await axios.get(url);
      console.log('getVideos', res.data);
      dispatch({ type: 'LOAD', payload: res.data });
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  useEffect(() => {
    async function getVideos() {
      try {
        const res = await axios.get(url);
        const parsedData = Papa.parse(res.data, { header: true });
        dispatch({ type: 'LOAD', payload: parsedData.data });
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    getVideos()
  }, [dispatch])

  console.log('videos:', videos);

  return (
    <>
      {
      videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log('Playing..', video.title)}
            onPause={() => console.log('Paused..', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </>
  )
}

export default VideoList
