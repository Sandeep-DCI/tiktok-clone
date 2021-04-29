import React, { useRef, useState } from 'react';
import './Video.css';
import my from './videos/my.mp4';
import appleCar from './videos/appleCar.mp4'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({ url, channel, description, song, likes, shares, messages }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>

            {/* <video
                onClick={handleVideoPress}
                className='video__player'
                loop muted
                ref={videoRef}
                src='https://www.youtube.com/embed/FqC2lO3Yy_4'>
            </video> */}


            <video className='video__player' controls autoPlay loop muted>
                <source src={my} type="video/mp4"></source>
            </video>


            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>




    )
}

export default Video