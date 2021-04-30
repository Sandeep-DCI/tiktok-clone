import axios from './axios';
import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './Video'

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();

  },[]);

  console.log(videos);




  return (
    // BEM naming convention
    <div className="app">

      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        )
        )}

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
