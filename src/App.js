import React from 'react'
import Video from './Video'
import "./styles.css"


export default function App() {
  
  return (
    <div className="app">
      
      <div className="app__videos">
      <Video 
        url="https://v16m.tiktokcdn.com/40fe0d5d228a166b399d8e01d9d0db7a/5f517f10/video/tos/useast2a/tos-useast2a-pve-0068/3664980a5a334567b4848e703f43a893/?a=1233&br=4480&bt=2240&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009031740450101890730195B187EF1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3V4NnZscW51djMzZDczM0ApNWlpM2RkaGRmN2dnaTw6O2cuLWU1c2Y0bjJfLS1jMTZzczUxYWItYWMwXjBfLTBfLzE6Yw%3D%3D&vl=&vr="
        channel="Peru"
        description="Dixx u description song"
        song="90 music song"
        likes={544}
        messages={76}
        shares={44}/>
      <Video 
        url="https://youtu.be/g8yGxDMyGiE"
        channel="Peru"
        description="Huayno Peruano"
        song="Apurimac"
        likes={934}
        messages={26}
        shares={94}/>
      />
      <Video 
        url="https://v16m.tiktokcdn.com/903beb19813aa00cd1261fa219c5a21c/5f51d70e/video/tos/alisg/tos-alisg-pve-0037/89da7df8ea1743ddaba1350be14d5b22/?a=1233&br=3078&bt=1539&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200903235537010190185145593013E6&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M29xeGt3Zjo8dzMzNzczM0ApOmQ1ZTdkODw1N2Y6ZDs4PGdlYnNhaGwtMzRfLS01MTRzczVjLi5eXzIwNS8zNS8xNTI6Yw%3D%3D&vl=&vr="
        channel="Peru"
        description="Huayno Peruano"
        song="Apurimac"
        likes={934}
        messages={26}
        shares={94}/>
      />
      <Video 
        url="https://v16m.tiktokcdn.com/32fd2c3ace7f89c3bc981da815262e52/5f517f02/video/tos/useast2a/tos-useast2a-ve-0068c001/bfb441106e694362a3b00854d703472f/?a=1233&br=4876&bt=2438&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009031740420101902092201C1830D5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amR2bHBzOzZrdjMzZDczM0ApNjY8PDw7ZWRoNzg6O2YzaGdncWswM2ZyYi9fLS0uMTZzc2MvXjVgYV80MzExYzYyXjQ6Yw%3D%3D&vl=&vr="
        channel="Peru"
        description="Huayno Peruano"
        song="Apurimac"
        likes={934}
        messages={26}
        shares={94}/>
      />
      </div>
    </div>
  )
}
