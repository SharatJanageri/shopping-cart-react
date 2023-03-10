import React, { useContext,  useRef } from "react";
import { CartContext } from "./Cart";


//or instead of props use const Items = ({title,img,price,quantity}) =>
const Items = (props) =>{

    const {increment, decrement} = useContext(CartContext);
       
    const data = useRef();

    return (
        <>
             <div className='items-info'>
                        
                        <div className='product-img'>       
                            <img alt='Egg-puff' src ={props.img}/>                        
                        </div>       
                        <div className='title'>
                            <h4>{props.title}</h4>
                        </div>
                        <div className='add-minus-quantity'>
                            <i className="fa fa-minus" aria-hidden="true" onClick={() => {decrement(props.id)}}></i>
                            <input type='text' ref= {data} placeholder={props.quantity} / >
                            <i className="fa fa-plus" aria-hidden="true" onClick={ () => increment(props.id) }></i> 
                        </div>

                        <div className='price'>
                            <h4>{props.price}</h4>
                        </div>
                
                    </div>
                    <hr/>
                    
        </>

    )
}

export default Items