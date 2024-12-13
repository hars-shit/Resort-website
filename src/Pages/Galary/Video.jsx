import vd from '../../img/marrige.mp4';

const Video = ({ setOpen }) => {
    return (
      <div className="video" onClick={() => { setOpen(true);  }}>
        <video src={vd} muted />
      </div>
    );
  };
  
  export default Video;
  