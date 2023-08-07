import "./footer.css";
import logo1 from './50.png';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
      <Link to='/'><img src={logo1} alt=""></img></Link>
        
      </div>
      <p1>2021-2023 All Right Reserved </p1>
    </div>
  );
}

export { Footer };
