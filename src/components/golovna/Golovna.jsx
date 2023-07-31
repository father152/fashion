import { Link } from 'react-router-dom';
import './golovna.css'
import image from "./girl.png";
import Image from "./LET’S EXPLORE UNIQUE CLOTHES..png";

function Golovna() {
  return (
    <div className="golovna">
      <div className="container-1">
        <div className="leftpart">
          <img src={Image} alt=""></img>
          <p>Live for Influential and Innovative fashion!</p>
          <button className='shopnow'>
           <Link to="/shopnow">SHOP NOW</Link>
           </button>
        </div>
        <div className="rigthpart">
          <img src={image} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export { Golovna };
