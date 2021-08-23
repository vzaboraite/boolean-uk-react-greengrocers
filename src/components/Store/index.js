import { useState } from "react";
import FilterOptions from "./components/FilterOptions";
import SortOptions from "./components/SortOptions";
import StoreItemList from "./components/StoreItemList";

function Store(props) {
  const { storeItems, addItemToCart } = props;
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  /* Filter functions */

  const filterByType = (storeItems) => {
    const filteredItems = storeItems.filter((item) => type === item.type);
    return filteredItems;
  };

  /* Sort functions */

  /* Resources for sorting `products by name` using array method `localeCompare()` */
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  // https://stackoverflow.com/questions/10198257/comparing-2-strings-alphabetically-for-sorting-purposes

  const sortItems = (storeItems) => {
    const filteredItems = [...storeItems].sort((item1, item2) => {
      switch (sort) {
        case "priceLow":
          return item1.price - item2.price;
          break;
        case "priceHigh":
          return item2.price - item1.price;
          break;
        case "asc":
          return item1.name.localeCompare(item2.name);
          break;
        case "des":
          return item2.name.localeCompare(item1.name);
          break;
      }
    });
    return filteredItems;
  };

  /* Render function */

  const getItemsToRender = (storeItems) => {
    let result = storeItems;
    if (type !== "") {
      result = filterByType(storeItems);
    }
    if (sort !== "") {
      result = sortItems(result);
    }
    return result;
  };

  const itemsToRender = getItemsToRender(storeItems);

  /* Event handlers */

  const handleTypeChange = (event) => setType(event.target.value);

  const handleSortChange = (event) => setSort(event.target.value);

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <form>
        <FilterOptions onChange={handleTypeChange} />
        <SortOptions onChange={handleSortChange} />
      </form>
      <StoreItemList storeItems={itemsToRender} addItemToCart={addItemToCart} />
    </header>
  );
}

export default Store;
