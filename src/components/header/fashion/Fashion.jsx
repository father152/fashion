import "./fashion.css"
import {News3} from "./News3.jsx"
import {News1} from "./News1.jsx"

const Fashion = () => {
    return (
        <div className='fashion'>
        <div className='name-fashion'>
        <h1>FASHION</h1>
        </div>
<div className='container-fashion'>
        <div className='news1'>
        <News1 />
        </div>
        <div className='news2'>
        <p>News 2</p>
        </div>
        <div className='news3'>
        <News3 />
        </div>
</div>
        
        </div>
    )
}
export  {Fashion}