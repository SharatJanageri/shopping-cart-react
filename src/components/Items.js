import React, { useContext } from "react";
import Cart, { CartContext } from "./Cart";


//or instead of props use const Items = ({title,img,price,quantity}) =>
const Items = (props) =>{

    const {increment, decrement} = useContext(CartContext);

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
                            <i class="fa fa-minus" aria-hidden="true" onClick={() => {decrement(props.id)}}></i>
                            <input type='text' placeholder={props.quantity} / >
                            <i class="fa fa-plus" aria-hidden="true" onClick={ () => increment(props.id) }></i> 
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