import StoreItemList from "./components/StoreItemList";

function Store(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <StoreItemList
        storeItems={props.storeItems}
        addItemToCart={props.addItemToCart}
      />
    </header>
  );
}

export default Store;
