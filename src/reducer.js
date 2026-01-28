import CartItem from "./components/CartItem"

const reducer=(state,action)=>{
    if (action.type==="CLEAR_CART"){
        return {...state,cart:[]}
    }
    if (action.type==="Reset"){
        return {
            ...state,
            cart:state.cart.filter((CartItem)=>CartItem.id!==action.payload),
        }
    }
    if(action.type==="Increase"){
        let tempCart=state.cart.map((CartItem)=>{
            if(action.payload===CartItem.id){
            return {...CartItem, amount:CartItem+1}}
        });
        return {...state,cart:tempCart}
    }
    if(action.type==="Dicrease"){
        let tempCart=state.cart.map((CartItem)=>{
            if(action.payload===CartItem.id){
            return {...CartItem, amount:CartItem-1}}
        }).filter((CartItem)=>CartItem!==0);
        return {...state,cart:tempCart}
    }
}

export default reducer