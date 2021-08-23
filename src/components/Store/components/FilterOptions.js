function FilterOptions(props) {
  console.log("Props inside FilterOptions: ", props);
  const { onChange } = props;
  return (
    <>
      <label>Filter:</label>
      <select name="types" id="types" onChange={onChange}>
        <option value="">Show all</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
      </select>
    </>
  );
}

export default FilterOptions;
