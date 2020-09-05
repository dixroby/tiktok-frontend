import axios from './axios'
import React, { useState, useEffect } from 'react'
import Video from './Video'
import "./styles.css"


export default function App() {
  const [videos,setVideos]=useState([]);
      
    useEffect(() => {
        async function fetchPost(){
          const response = await axios.get("v2/posts")
          setVideos(response.data);

          return response;
        }
        fetchPost();
      }, []);

  return (
    <div className="app">
      
      <div className="app__videos">
      {videos.map((
        {url,channel,description,song,likes, messages,shares}) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        )
      )}
      </div>
    </div>
  )
}
