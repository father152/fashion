import React from 'react'
import { Link } from 'react-router-dom';
import './hoodiessweatshirt.css'


function CardHS(props) {
  return (
    <div className="cardhs">
      <div>
        <span className="brandhs">{props.brand}</span>
      </div>
      <div>
        <span className="namehs">{props.name}</span>
      </div>
      <img className='pichs' src={props.image} alt={props.names} />
      <div>
        <span className="modelhs">{props.model}</span>
      </div>
      <div>
        <span className="descriptionhs">{props.description}</span>
      </div>
      <div>
        <span className="costhshs">{props.cost}$</span>
      </div>
            <button className='buyhs'>
           <Link to="/buyhs">BUY</Link>
           </button>
     
    </div>
  );
}



const Hoodiessweatshirt = () => {
  return (
    <>
<h3>Hoodiessweatshirt</h3>
  <div className='productshs'>
    
        
    <CardHS 
          brand="WEST"
          name="Jacket"
          image={''} 
          names='Picture 1'     
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
            />
            <CardHS 
            brand="WEST"
            name="Jacket"
            image={''} 
            names='Picture 1'     
            model="Style"
            description="dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdh "
            cost="77"
              />
              <CardHS 
              brand="WEST"
              name="Jacket"
              image={''} 
              names='Picture 1'     
              model="Style"
              description="dfgergeg ergdfgerg ergergerg ghjuighj 
            fghjrthdh thdghdh "
              cost="77"
                />
                <CardHS 
                brand="WEST"
                name="Jacket"
                image={''} 
                names='Picture 1'     
                model="Style"
                description="dfgergeg ergdfgerg ergergerg ghjuighj 
              fghjrthdh thdghdh "
                cost="77"
                  />
                  <CardHS 
                  brand="WEST"
                  name="Jacket"
                  image={''} 
                  names='Picture 1'     
                  model="Style"
                  description="dfgergeg ergdfgerg ergergerg ghjuighj 
                fghjrthdh thdghdh "
                  cost="77"
                    />
                    <CardHS 
          brand="WEST"
          name="Jacket"
          image={''} 
          names='Picture 1'     
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
            />
            <CardHS 
          brand="WEST"
          name="Jacket"
          image={''} 
          names='Picture 1'     
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
            />
            <CardHS 
            brand="WEST"
            name="Jacket"
            image={''} 
            names='Picture 1'     
            model="Style"
            description="dfgergeg ergdfgerg ergergerg ghjuighj 
          fghjrthdh thdghdh "
            cost="77"
              />
    
   </div>
   <Link to="/" className="backhs">Home</Link>
  </>
  )
 
}

export  {Hoodiessweatshirt};   