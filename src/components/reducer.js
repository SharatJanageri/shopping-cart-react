export const reducer = (state,action) => {
    
    if(action.type === "INCREMENT"){
        let updatedCart = state.currentItem.map((curElement) => {
            if(curElement.id === action.payload){
               return {...curElement, quantity:curElement.quantity++}
            }
            return curElement;
        });
        return {...state, currentItem:updatedCart}
    }

    //decrement 
    if(action.type === "DECREMENT"){
        let updatedValues = state.currentItem.map((curElem) => {
            if(curElem.id === action.payload){
                if(curElem.quantity >0 ){
                    return{...curElem, quantity:curElem.quantity--}

                }
                else {
                    return{...curElem, quantity:curElem.quantity = 0}

                }
            }
            return curElem;
        });
        return {...state,currentItem:updatedValues};
    }

    // if(action.type ==="GET_TOTAL"){
    //     let {totalItem } = state.currentItem.reduce((accum, curValue) => {
    //         let { quantity } = curValue;
    //         accum.totalItem += quantity;
    //         return accum;

    //     },
    //     {
    //         totalItem: 0,
    //     }
    //     );
    //     return {...state, totalItem};
    // }

    return state;
}
