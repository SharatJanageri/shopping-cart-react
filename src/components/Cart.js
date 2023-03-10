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
    totalItems: 0,
}


const Cart = () => {
    // used this for pure react not used any ContextApi and ContextProvier
    // const [currentItem, setItems] = useState();

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

    const lastValue = (data) => {
        return dispatch({
            type: "LAST",
            payload: data
        } ); 
    };

    //useEffect to update number of data in the Cart 
    useEffect(() =>{
        dispatch({
            type:"GET_TOTAL",
        });
    },[state.currentItem]);

    //to store values in local storage 
       useEffect(() => {
        localStorage.setItem( "Data",JSON.stringify(state) );
    },[state]);
    

    //getvalues from local storage
    useEffect(() => {
        const data = localStorage.getItem( "Data" ); //get the local values
        if(data){
            lastValue(data)

        }
        else{
            // console.log("skdjfl")
        }
    },[]);
   
    return (
        <>
           
                <CartContext.Provider value={{ ...state, increment, decrement, lastValue }}>
                    <ContextCart />
                </CartContext.Provider>
            
        </>
    )
}

export default Cart;
