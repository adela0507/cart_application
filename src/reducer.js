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
    if(action.type==="GetTotals"){
        let {total,amount}=state.cart.reduce(
            (CartItem,cartTotal)=>{
                const {price,amount}=CartItem;
                const itemTotal=price*amount
            cartTotal.total+=itemTotal;
            cartTotal.amount+=amount;
            },
            {
                total:0,
                amount:0,
            }
        );
        total=parseFloat(total.toFixed(2))
        return {...state,total,amount}
    }
    if(action.type==="Display"){
        return{...state,cart:action.payload, loading:false}
    }
    if(action.type==="Loading"){
        return{ ...state,loading:true}
    }
    if(action.type==="Toggle"){
        let tempCart=state.cart.map((CartItem)=>{
            if(CartItem.id===action.payload){
                if(action.payload.type==="inc"){
                return {...CartItem,amount:CartItem.amount+1}
            }
            if(action.payload.type==="dec"){
                return {...CartItem,amount:CartItem.amount-1}
            }
            }            return CartItem;

        }).filter((CartItem)=>CartItem.amount!==0);
        return {...state,cart:tempCart}
    }
    throw new Error("nu match")
}

export default reducer