import React, { useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars-2';
import Items from './Items';
import { product } from './Product';

const Cart = () => {
    const [currentItem, setItems] = useState(product);


    return (
        <>
        <header>
            <div className='continue-shopping'>
                <h3>Back</h3>
            </div>
        </header>

        <section className='main-cart-section'>
            <h2>Items</h2>
            <p className='total-items'> You have {} items in Cart</p>
            <div className='cart-items'>
                <div className='cart-items-container'>
                    <Scrollbars>
                       {
                            currentItem.map((item) => {
                                return <Items key={item.id} {...item}/>
                            })
                       }
                    
                    </Scrollbars>
            </div>
                 
            </div>
            <div className='card-total'>
                <h3>Total: <span>200</span></h3>
                <button>Done</button>
            </div>
        </section>
        
        </>
    )
}

export default Cart;
