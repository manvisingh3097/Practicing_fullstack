 import { ActionTypes } from "../constants/action-types";

 //initial state
 const initialState = {
    numberCart : 0,
    carts: []
 }

 export const cartReducer = (state = initialState , {type, payload}) => {
    switch(type){
        case ActionTypes.ADD_TO_CART:
            // write logic to add the item in the cart
            if (state.numberCart === 0) {

                let item = {
                    ...payload,
                    quantity: 1
                };
                state.carts.push(item);
            } else {
                let check = false;
                state.carts.map((itemm,index) => {
                    if (DataTransferItemList._id === payload._id){
                        state.carts[index].quantity++;
                        check = true
                    }
                });

                if (!check) {
                    let _item ={
                        ...payload,
                        quantity: 1
                    }

                    state.carts.push(_item);
                }
            }

            return {
                ...state,
                numberCart: state.numberCart +1
            }
            default:
                return state;
 }

 }