import React, { createContext, useEffect, useReducer } from 'react';

import { product } from './Product';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

//used ContextApi and ContextProvider instead of useState
export const CartContext = createContext();

//inital values is defined below and state is in reducer
const initalState = {
    currentItem: product,
    totalAmount: 0,
    totalItem: 0
}

const Cart = () => {
    // const [currentItem, setItems] = useState(product); // used this for pure react not used any ContextApi and ContextProvier

    //using the useReducer 
    const [state,dispatch] = useReducer(reducer,initalState);

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })

    };

    const decrement = (id) =>{
        return dispatch({
            type: "DECREMENT",
            payload: id
        })
    };

    //useEffect to update number of data in the Cart 
    // useEffect(() =>{
    //     dispatch({
    //         type:"GET_TOTAL",
           
    //     });
    // },[state.currentItem]);

     
    return (
        <>
           
                <CartContext.Provider value={{ ...state, increment, decrement }}>
                    <ContextCart />
                </CartContext.Provider>
            
        </>
    )
}

export default Cart;
