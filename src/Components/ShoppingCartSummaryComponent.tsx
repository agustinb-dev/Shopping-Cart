export function ShoppingCartSummary(props: {
  totalQty: number;
  totalCost: number;
  setShowItems: (arg0: boolean) => void;
  setTotalQty: (arg0: number) => void;
  setTotalCost: (arg0: number) => void;
}) {
  const handleClearClick = () => {
    props.setShowItems(false);
    props.setTotalQty(0);
    props.setTotalCost(0);
  };

  return (
    <div className="ShoppingCartSummary">
      <div>
        <p>
          Number of items: <strong>{props.totalQty}</strong>
        </p>
      </div>
      <div>
        <p>
          Total: <strong>${props.totalCost.toFixed(2)}</strong>
        </p>
      </div>
      <div>
        <button onClick={handleClearClick} disabled={props.totalQty === 0}>
          Clear shopping cart
        </button>
      </div>
    </div>
  );
}
