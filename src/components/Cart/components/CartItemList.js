import CartItem from "./CartItem";

function CartItemList(props) {
  const { cartItems, addHandler, removeHandler } = props;
  return (
    <ul className="item-list cart--item-list">
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.item.id}
          cartItem={cartItem}
          addHandler={addHandler}
          removeHandler={removeHandler}
        />
      ))}
    </ul>
  );
}

export default CartItemList;
