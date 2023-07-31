import { Link } from "react-router-dom";
import "./catalogue.css";


function Card(props) {
  
  return (
    <div className="card">
      <div>
        <span className="brand">{props.brand}</span>
      </div>
      <div>
        <span className="name">{props.name}</span>
      </div>
  
      <div>
        <span className="model">{props.model}</span>
      </div>
      <div>
        <span className="description">{props.description}</span>
      </div>
      <div>
        <span className="cost">{props.cost}$</span>
      </div>
      
      <button className='buy'>
           <Link to="/buy">BUY</Link>
           </button>
      
    </div>
  );
}

const Catalogue = () => {
  return (
    <div className="catalogue">
      <h1>CATALOGUE</h1>
      <div className="product">
        <Card
          brand="WEST"
          name="Jacket"
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
   
     <Card
     brand="WEST"
     name="Jacket"
  
     model="Style"
     description="dfgergeg ergdfgerg ergergerg ghjuighj 
   fghjrthdh thdghdh "
     cost="45"
   />
   <Card
     brand="Ford"
     name="Auto"
     model="Focus"
     description="dfgergeg ergdfgerg ergergerg ghjuighj 
   fghjrthdh thdghdh "
     cost="45"
   />
   <Card
     brand="Ford"
     name="Auto"
     model="Focus"
     description="dfgergeg ergdfgerg ergergerg ghjuighj 
   fghjrthdh thdghdh "
     cost="45"
   />
   <Card
          brand="WEST"
          name="Jacket"
       
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
      </div>
  
    

      <Link to="/" className="back">
        Home
      </Link>
    </div>
  );
};
export { Catalogue };
