import "./lifestyle.css";
import { Link } from "react-router-dom";
import home from "./free-icon-font-home-3917032.png"

const Lifestyle = () => {
  return (
    <div className="lifestyle">
      <h5>LIFESTYLE</h5>
      <div className="part-1">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK12xMwhGqSE1d1gEZ7xjuRBbevwrdvXj_yQ&usqp=CAU' alt="pic"></img>
        <p>
          Photos are one of the most important elements of your online store.
          Half of online shoppers use images to decide what to buy online.
          Lifestyle photography shows your products being used in an artistic
          manner by your target market in their natural state. Also referred to
          as candid shots, this style of ecommerce photography helps online
          shoppers see your products used in a model’s day to day life.
        </p>
       
      </div>
      <h5>LIFESPEED</h5>
      <div className="part-2">
              <p>
          Photos are one of the most important elements of your online store.
          Half of online shoppers use images to decide what to buy online.
          Lifestyle photography shows your products being used in an artistic
          manner by your target market in their natural state. Also referred to
          as candid shots, this style of ecommerce photography helps online
          shoppers see your products used in a model’s day to day life.
        </p>
        <img src="https://www.thephotoargus.com/wp-content/uploads/2019/09/lifestyleportrait01.jpg"alt="pic"></img>
      </div>
      <h5>LIFESPEED</h5>
      <div className="part-3">
        <img src="https://www.thephotoargus.com/wp-content/uploads/2018/11/lifestyle44.jpg"alt="pic"></img>
        <p>
          Photos are one of the most important elements of your online store.
          Half of online shoppers use images to decide what to buy online.
          Lifestyle photography shows your products being used in an artistic
          manner by your target market in their natural state. Also referred to
          as candid shots, this style of ecommerce photography helps online
          shoppers see your products used in a model’s day to day life.
        </p>
      </div>
      <h5>LIFESTYLE</h5>
      <div className="part-4">
                <p>
          Photos are one of the most important elements of your online store.
          Half of online shoppers use images to decide what to buy online.
          Lifestyle photography shows your products being used in an artistic
          manner by your target market in their natural state. Also referred to
          as candid shots, this style of ecommerce photography helps online
          shoppers see your products used in a model’s day to day life.
        </p>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK12xMwhGqSE1d1gEZ7xjuRBbevwrdvXj_yQ&usqp=CAU' alt="pic"></img>
      </div>
      <Link to="/" className="back">
      <img src={home} alt=""></img>
      
      </Link>
    </div>
  );
};
export { Lifestyle };
