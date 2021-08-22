import CartItemList from "./components/CartItemList";
import TotalSection from "./components/TotalSection";

function Cart(props) {
  console.log("Props inside Cart: ");

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <CartItemList
          cartItems={props.cartItems}
          removeHandler={props.removeHandler}
          addHandler={props.addHandler}
        />
      </div>
      <TotalSection totalPrice={props.totalPrice} />
    </main>
  );
}

export default Cart;
