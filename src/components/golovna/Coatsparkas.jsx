import React from 'react'
import { Link } from 'react-router-dom';
import "./coatsparkas.css";
import aa from './11.jpg'


function CardCP(props) {
  return (
    <div className="cardcp">
      <div>
        <span className="brandcp">{props.brand}</span>
      </div>
      <div>
        <span className="namecp">{props.name}</span>
      </div>
      <img className="piccp" src={props.image} alt={props.names} />
      <div>
        <span className="modelcp">{props.model}</span>
      </div>
      <div>
        <span className="descriptioncp">{props.description}</span>
      </div>
      <div>
        <span className="costhscp">$ {props.cost}</span>
      </div>
      <button className="buycp">
        <Link to="/buycp">BUY</Link>
      </button>
    </div>
  );
}



const Coatsparkas = () => {
  return (
<>
<h3>Coast parkas</h3>
<div className="productscp">
  <CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  <CardCP
  brand="H&M"
  name="Jacket"
  image={aa}
  names="Picture 1"
  model="Style"
  description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
  fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
fghjrthdh thdghdh "
  cost="77"
/>
<CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  <CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  <CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  <CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  <CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  <CardCP
    brand="H&M"
    name="Jacket"
    image={aa}
    names="Picture 1"
    model="Style"
    description="dfgergeg dfgergeg ergdfgerg ergergerg ghjuighj 
    fghjrthdh thdghdhergdfgerg dfgergeg dfgergegergergerg ghjuighj 
  fghjrthdh thdghdh "
    cost="77"
  />
  </div>
    <Link to="/" className="backhs">Home</Link>
   </>
  )
}

export  {Coatsparkas};   