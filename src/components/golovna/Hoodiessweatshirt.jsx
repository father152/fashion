import React from "react";
import { Link } from "react-router-dom";
import "./hoodiessweatshirt.css";
import elleven from './11.jpg'
import twelve from './12.jpg'
import thirteen from './13.jpg'
import fourteen from './14.jpg'
import fifteen from './12.jpg'
import sixteen from './11.jpg'
import seventeen from './14.jpg'
import eightteen from './13.jpg'



function CardHS(props) {
  return (
    <div className="cardhs">
      <div>
        <span className="brandhs">{props.brand}</span>
      </div>
      <div>
        <span className="namehs">{props.name}</span>
      </div>
      <img className="pichs" src={props.image} alt={props.names} />
      <div>
        <span className="modelhs">{props.model}</span>
      </div>
      <div>
        <span className="descriptionhs">{props.description}</span>
      </div>
      <div>
        <span className="costhshs">$ {props.cost}</span>
      </div>
      <button className="buyhs">
        <Link to="/buyhs">BUY</Link>
      </button>
    </div>
  );
}

const Hoodiessweatshirt = () => {
  return (
    <>
      <h3>Hoodiess weatshirt</h3>
      <div className="productshs">
        <CardHS
          brand="H&M"
          name="Jacket"
          image={elleven}
          names="Picture 1"
          model="Style"
          description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={twelve}
          names="Picture 1"
          model="Style"
          description="dfgergeg dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdh "
          cost="46"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={thirteen}
          names="Picture 1"
          model="Style"
          description="dfgergeg dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg ergdfgerg ergergerg ghjuighj 
            fghjrthdh thdghdh "
          cost="77"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={fourteen}
          names="Picture 1"
          model="Style"
          description="dfgergegdfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg  ergdfgerg ergergerg ghjuighj 
              fghjrthdh thdghdh "
          cost="77"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={fifteen}
          names="Picture 1"
          model="Style"
          description="dfgergegdfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg  ergdfgerg ergergerg ghjuighj 
                fghjrthdh thdghdh "
          cost="77"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={sixteen}
          names="Picture 1"
          model="Style"
          description="dfgergegdfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg  ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={seventeen}
          names="Picture 1"
          model="Style"
          description="dfgergeg dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
        />
        <CardHS
          brand="WEST"
          name="Jacket"
          image={eightteen}
          names="Picture 1"
          model="Style"
          description="dfgergeg dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdhergdfgerg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdh "
          cost="77"
        />
      </div>
      <Link to="/" className="backhs">
        Back
      </Link>
    </>
  );
};

export { Hoodiessweatshirt };
