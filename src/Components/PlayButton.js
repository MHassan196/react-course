import React, {useContext, useState} from 'react'
import './PlayButton.css'
import ThemeContext from '../context/ThemeContext';

function PlayButton({children, onPlay, onPause}) {
    console.log('Render PlayButton')

    const theme = useContext(ThemeContext)

    const [playing, setPlaying] = useState(false);

    function handleClick(e){
        // console.log(e)
        e.stopPropagation();
        if(playing){
            onPause()
        } else{
            onPlay()
        }
        setPlaying(!playing);
    }

  return (
   
      <button className={theme} onClick={handleClick}>{children} : {playing? '⏸️' : '⏯️'}</button>
    
  )
}

export default PlayButton
