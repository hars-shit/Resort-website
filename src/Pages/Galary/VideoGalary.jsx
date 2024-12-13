import { useState } from 'react';

import { IoCloseCircleSharp } from "react-icons/io5";
import "./VideoGalary.css"; 


function VideoGallery() {
  const [open, setOpen] = useState(false);
 



  return (
    <div className='containerV'>
      <p style={{marginBottom:'2rem'}}>Video Gallery</p>
      <div className='videoContainer'>
       
          {/* <Video key={index} setOpen={setOpen}  /> */}
      
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
          {/* <video controls src={src} autoPlay /> */}
            </div>
      </div>
      )}
    </div>
  );
}

export default VideoGallery;