import React from 'react'
import { useGlobalContext } from '../context'

const CartItem = ({id,img,title,price,amount}) => {

    const{remove, increase,decrease,toggleAmount}=useGlobalContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'> ${price}</h4>
        <button className='remove-btn' onClick={()=>remove(id)}>Remove</button>
      </div>
    <div style={{display:"flex"}}>
        <button className='amount-btn' onClick={()=>toggleAmount(id,"dec")}>
            <p style={{fontSize:"20px"}}>Decrease amount</p>
        </button>

        <button className='amount-btn' onClick={()=>toggleAmount(id,"inc")}>
            <p style={{fontSize:"20px"}}>Increase amount</p>
        </button>
    </div>
    </article>
  )
}

export default CartItem
