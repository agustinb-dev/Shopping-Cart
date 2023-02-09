import { useState } from "react";
import { ItemEdit } from "./ItemEditComponent";

export function Item(props: {
  name: string;
  price: number;
  defaultQty: number;
  updateTotalCost: (delta: number) => void;
  updateTotalQty: (delta: number) => void;
  removeItem: (qty: number, totalPrice: number) => void;
}): JSX.Element {
  const [showItem, setShowItem] = useState(true);
  const [qty, setQty] = useState(props.defaultQty);
  const [showChangeQty, setShowChangeQty] = useState(false);
  const itemName = props.name;
  const itemPrice = props.price;

  let totalPrice = (qty * itemPrice).toFixed(2);

  function handleRemoveClick(): void {
    setShowItem(false);
    props.removeItem(qty, qty * itemPrice);
  }
  return (
    <>
      {showItem && (
        <div className="Item">
          <h3>{itemName}</h3>
          {!showChangeQty ? (
            <div>
              {qty} x ${itemPrice} = <strong>${totalPrice}</strong>
              <div>
                <button onClick={() => setShowChangeQty(!showChangeQty)}>
                  Change quantity
                </button>
                <button onClick={handleRemoveClick}>Remove</button>
              </div>
            </div>
          ) : (
            <ItemEdit
              qty={qty}
              itemPrice={itemPrice}
              setShowChangeQty={setShowChangeQty}
              showChangeQty={showChangeQty}
              setQty={setQty}
              updateTotalCost={props.updateTotalCost}
              updateTotalQty={props.updateTotalQty}
              deleteItem={handleRemoveClick}
            />
          )}
        </div>
      )}
    </>
  );
}
