import { Link } from "react-router-dom";
import "./header.css";
import logo from "./50.png";


function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link to='/'><img src={logo} alt=""></img></Link>
          </div>
          <div className="header__nav">
            <ul>
              <li><Link to="/catalogue">CATALOGUE</Link>  </li>
              <li><Link to="/fashion">FASHION</Link>  </li>
              <li><Link to="favorite">FAVOURITE</Link>  </li>
              <li><Link to="lifestyle" >LIFESTYLE</Link>  </li>
              <li><Link to="signup" className='last'>SIGN UP</Link>  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Header};
