function TotalSection(props) {
  const { totalPrice } = props;
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{totalPrice}</span>
      </div>
    </div>
  );
}

export default TotalSection;
