import React from 'react'
import { useGlobalContext } from '../context'

function CartContainer() {

    const [cart]=useGlobalContext();

    if(cart.length===0){
        return (
            <section className='cart'>
            <header>
                <h2>your wishlist</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
            </section>
        )
    }

  return (
    <section className='cart'>
        <header>
            <h2>Your wishlist</h2>
            <div>
                {}
            </div>
            <footer>
                <hr />
                <div className="cost-total">
                    <h4>total <span>$ 0.00</span></h4>
                    <button className='btn clear-btn' onClick={()=>console.log}></button>
                </div>
            </footer>
        </header>
      
    </section>
  )
}

export default CartContainer
