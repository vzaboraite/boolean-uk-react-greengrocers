import "./styles/reset.css";
import "./styles/index.css";

import { useState } from "react";
import ItemImage from "./components/ItemImage";

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
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.35,
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.35,
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.35,
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.35,
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.35,
  },
  {
    id: "007-bell-pepper",
    name: "bell pepper",
    price: 0.35,
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.35,
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.35,
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.35,
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
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((storeItem) => (
            <li key={storeItem.id}>
              <div className="store--item-icon">
                <ItemImage item={storeItem} />
              </div>
              <button
                onClick={() => {
                  console.log("clicked");
                  addItemToCart(storeItem);
                }}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItem) => (
              <li key={cartItem.item.id}>
                <ItemImage className="cart--item-icon" item={cartItem.item} />
                <p>{cartItem.item.name}</p>
                <button
                  className="quantity-btn remove-btn center"
                  onClick={() => removeFromCart(cartItem)}
                >
                  -
                </button>
                <span className="quantity-text center">
                  {cartItem.quantity}
                </span>
                <button
                  className="quantity-btn add-btn center"
                  onClick={() => addItemToCart(cartItem.item)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{countTotalPrice(cartItems)}</span>
          </div>
        </div>
      </main>
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
