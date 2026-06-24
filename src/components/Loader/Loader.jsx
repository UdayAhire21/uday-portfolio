import "./Loader.css";
// Import your new Luffy GIF
import luffyGif from "../../assets/luffy-coffee.gif"; 

function Loader() {
  return (
    <div className="loader-container">
      
      <div className="sticker-wrapper">
        <img src={luffyGif} alt="Luffy Loading..." className="anime-sticker" />
      </div>

      {/* Changed the text to fit the One Piece theme! */}
      <h2 className="loading-text">Preparing to Set Sail...</h2>
      
      <div className="loading-bar-container">
        <div className="loading-progress"></div>
      </div>

    </div>
  );
}

export default Loader;