import CartItemList from "./components/CartItemList";
import TotalSection from "./components/TotalSection";

function Cart(props) {
  const { cartItems, removeHandler, addHandler, totalPrice } = props;
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <CartItemList
          cartItems={cartItems}
          removeHandler={removeHandler}
          addHandler={addHandler}
        />
      </div>
      <TotalSection totalPrice={totalPrice} />
    </main>
  );
}

export default Cart;
