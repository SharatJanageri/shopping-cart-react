import React from "react";


//or instead of props use const Items ({title,img,price,quantity})
const Items = (props) =>{
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
                            <i class="fa fa-minus" aria-hidden="true"></i>
                            <input type='text' placeholder='0'/ >
                            <i class="fa fa-plus" aria-hidden="true"></i> 
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