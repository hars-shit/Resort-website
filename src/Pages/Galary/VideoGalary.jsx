import { useState } from 'react';
import Video from './Video';
import { IoCloseCircleSharp } from "react-icons/io5";
import "./VideoGalary.css"; 
import a from '../../img/WhatsApp Video 2024-04-02 at 9.24.17 AM.mp4'
import b from '../../img/WhatsApp Video 2024-04-02 at 9.24.16 AM.mp4'
import c from '../../img/WhatsApp Video 2024-04-04 at 10.08.42 AM.mp4'

function VideoGallery() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');

  const videos = [a,b,c];

  return (
    <div className='containerV'>
      <p style={{marginBottom:'2rem'}}>Video Gallery</p>
      <div className='video-container'>
        {videos.map((videoSrc, index) => (
          <Video key={index} setOpen={setOpen} setSrc={setSrc} src={videoSrc} />
        ))}
      </div>

      {open && (
        // <div className="popup-video">
        //   <button onClick={() => setOpen(false)}>Close</button>
        //   <h1>this is working now</h1>
        //   <video controls src={src} autoPlay />
        // </div>

        <div className="popup-video">
          <div className='video-video'>
          {/* <button onClick={() => setOpen(false)}>Close</button> */}
          <IoCloseCircleSharp className='AiFillCloseSquare' style={{cursor:"pointer"}} onClick={() => setOpen(false)} />
          <video controls src={src} autoPlay />
            </div>
      </div>
      )}
    </div>
  );
}

export default VideoGallery;