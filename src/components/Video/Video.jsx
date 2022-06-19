const Video=({active,src})=>{
   return  <video className={active?'active':''} src={src} autoPlay muted loop></video>
}

export default Video;