import { Link } from "react-router-dom";
import "./golovna.css";
import image from "./girl.png";
import Image from "./LET’S EXPLORE UNIQUE CLOTHES..png";
import icon1 from "./Rectangle 36.png";
import icon2 from "./Rectangle 44.png";
import icon3 from "./Rectangle 38.png";
import icon4 from "./Rectangle 45.png";
import icon5 from "./Rectangle 43.png";
import icon6 from "./Rectangle 41.png";
import icon7 from "./NEW ARRIVALS.png";
import photo1 from './Rectangle 20.png'
import photo2 from './Rectangle 21.png'
import photo3 from './Rectangle 22.png'
import arrow from './arrow-right-svgrepo-com.svg'


function Golovna() {
  return (
    <div className="golovna">
      <div className="container-1">
        <div className="leftpart">
          <img src={Image} alt=""></img>
          <p>Live for Influential and Innovative fashion!</p>
          <button className="shopnow">
            <Link to="/shopnow">SHOP NOW</Link>
          </button>
        </div>
        <div className="rigthpart">
          <img src={image} alt=""></img>
        </div>
      </div>
      <div className="container-2">
        <Link to="https://www.hm.com/ua/" target="_blank">
          <img src={icon1} alt=""></img>
        </Link>
        <Link to="https://obeyclothing.eu/" target="_blank">
          <img src={icon2} alt=""></img>
        </Link>
        <Link to="https://www.shopify.com/" target="_blank">
          <img src={icon3} alt=""></img>
        </Link>
        <Link to="https://www.lacoste.ua/" target="_blank">
          <img src={icon4} alt=""></img>
        </Link>
        <Link to="https://www.levi.com/" target="_blank">
          <img src={icon5} alt=""></img>
        </Link>
        <Link to="https://www.amazon.com/" target="_blank">
          <img src={icon6} alt=""></img>
        </Link>
      </div>
      <div className="container-3">
        <img src={icon7} alt=""></img>
        <div className='cards2'>
        <div className='card2'>
        <img className='foto' src={photo1} alt=""></img>
        <h3>Hoodies & Sweatshirt</h3>
        <h4>Explore Now!</h4>
        <Link to="/hoodiessweatshirt"><img className='arrow' src={arrow} alt=''/></Link>
        </div>
        <div className='card2'>
        <img className='foto' src={photo2} alt=""></img>
        <h3>Coats & Parkas</h3>
        <h4>Explore Now!</h4>
        <Link to="/coatsparkas"><img className='arrow' src={arrow} alt=''/></Link>
        </div>
        <div className='card2'>
        <img className='foto' src={photo3} alt=""></img>
        <h3>Tees & T-Shirt</h3>
        <h4>Explore Now!</h4>
        <Link to="/teesshirt"><img className='arrow' src={arrow} alt=''/></Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export { Golovna };
