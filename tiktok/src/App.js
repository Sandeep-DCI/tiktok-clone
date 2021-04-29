import React from 'react'
import './App.css';
import Video from './Video'

function App() {
  return (
    // BEM naming convention
    <div className="app">
      
      <div className="app__videos">
        <Video 
        channel='ssssandeep'
        description='Yooo Tiki Toki'
        song='dhink chik dhink chik'
        likes={123}
        messages={456}
        shares={789}
        />
        <Video 
        channel='ssssandeep'
        description='Yooo Tiki Toki'
        song='dhink chik dhink chik'
        likes={13423}
        messages={4456}
        shares={7289}
        />

      </div>



    </div>
  );
}

export default App;
