import React from 'react';
import './App.css';


import LinkInput from './components/LinkInput/linkinput.component';
import YoutubeArea from './components/YoutubeArea/youtubeArea.component';

function App() {

   

  return (
    <div className = "parent-wrapper">
      <LinkInput/>
      <YoutubeArea/>
    </div>
  );
}

export default App;
