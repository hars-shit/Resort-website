const Video = ({ setOpen, setSrc, src }) => {
    return (
      <div className="video" onClick={() => { setOpen(true); setSrc(src); }}>
        <video src={src} muted />
      </div>
    );
  };
  
  export default Video;
  