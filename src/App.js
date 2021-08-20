import "./styles/reset.css";
import "./styles/index.css";

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const initialStoreItems = [];

export default function App() {
  // Setup state here...

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul class="item-list store--item-list">
          {/* Wrtite some code here... */}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div class="cart--item-list-container">
          <ul class="item-list cart--item-list">
            {/* Wrtite some code here... */}
          </ul>
        </div>
        <div class="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span class="total-number">£0.00</span>
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
