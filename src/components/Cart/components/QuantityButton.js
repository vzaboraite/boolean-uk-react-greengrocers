function QuantityButton(props) {
  const { className, onClick, text } = props;
  return (
    <button className={`quantity-btn center ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default QuantityButton;
