import React from 'react';
import './App.css';
import YouTube from 'react-youtube';

import LinkInput from './components/LinkInput/linkinput.component';

function App() {

  const opts = {
    height: '580',
    width: '1020',
    playerVars: { 
      autoplay: 1
    }
  }; 

  return (
    <div>
    <LinkInput/>
      <YouTube
        videoId=""
        opts = {opts}
        onStateChange={(e) => console.log(e)} 
      />
    </div>
  );
}

export default App;
