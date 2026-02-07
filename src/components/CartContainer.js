import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

function CartContainer() {
  const { cart, amount, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your wishlist</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your wishlist</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="cost-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
          <button className="btn clear-btn" onClick={clearCart}>
            Clear
          </button>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer;
