import { ADD_TO_CART } from "../Constannts"
import { REMOVE_TO_CART } from "../Constannts"
export const addToCart=(data)=>{
  
    return{
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart=()=>{
    return{
        type:REMOVE_TO_CART,

    }
}