import "./footer.css";
import logo1 from './50.png';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo1} alt=""></img>
      </div>
      <p1>2021-2023 All Right Reserved </p1>
    </div>
  );
}

export { Footer };
