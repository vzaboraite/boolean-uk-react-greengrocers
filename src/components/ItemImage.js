function ItemImage(props) {
  const { item } = props;
  return (
    /* Problem: can't access icons that are stored in
      public folder.
      
      Solution: use absolute path instead of relative one, 
      because react code is compiled into html and both 
      index.html file and /assets folder are in same public folder.
    */
    <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
  );
}

export default ItemImage;
