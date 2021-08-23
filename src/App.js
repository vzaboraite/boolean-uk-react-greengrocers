import "./styles/reset.css";
import "./styles/index.css";

import { useState } from "react";
import Store from "./components/Store";
import Cart from "./components/Cart";

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const initialStoreItems = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35,
    type: "vegetable",
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.15,
    type: "vegetable",
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.25,
    type: "fruit",
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.5,
    type: "fruit",
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.75,
    type: "fruit",
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.3,
    type: "fruit",
  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 0.25,
    type: "vegetable",
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.15,
    type: "fruit",
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.15,
    type: "fruit",
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.6,
    type: "vegetable",
  },
];

const userCart = [
  {
    item: {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    quantity: 1,
  },
];

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState(userCart);

  const addItemToCart = (itemToAdd) => {
    console.log("itemToAdd: ", itemToAdd);

    let updatedCart;

    const foundItem = cartItems.find(
      (cartItem) => cartItem.item.id === itemToAdd.id
    );
    if (foundItem) {
      updatedCart = cartItems.map((cartItem) => {
        if (cartItem.item.id === itemToAdd.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
    } else {
      updatedCart = [...cartItems, { item: itemToAdd, quantity: 1 }];
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (targetItem) => {
    let updatedCart;

    if (targetItem.quantity <= 1) {
      updatedCart = cartItems.filter((cartItem) => {
        return cartItem.item.id !== targetItem.item.id;
      });
    } else {
      updatedCart = cartItems.map((cartItem) => {
        if (cartItem.item.id === targetItem.item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
    }
    setCartItems(updatedCart);
  };

  const countTotalPrice = (cartItems) => {
    let totalPrice = 0;
    cartItems.forEach((cartItem) => {
      totalPrice += cartItem.item.price * cartItem.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <Store storeItems={storeItems} addItemToCart={addItemToCart} />
      <Cart
        cartItems={cartItems}
        totalPrice={countTotalPrice(cartItems)}
        addHandler={addItemToCart}
        removeHandler={removeFromCart}
      />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}
