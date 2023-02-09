import { useState } from "react";

export function ItemEdit(props: {
  qty: number;
  itemPrice: number;
  setShowChangeQty: (arg0: boolean) => void;
  showChangeQty: any;
  setQty: (arg0: number) => void;
  updateTotalCost: (arg0: number) => void;
  updateTotalQty: (arg0: number) => void;
  deleteItem: () => void;
}) {
  let [editQty, setEditQty] = useState(props.qty);
  let editTotalPrice = (editQty * props.itemPrice).toFixed(2);

  function addQty(): void {
    setEditQty(editQty + 1);
  }

  function subtractQty(): void {
    if (editQty > 0) {
      setEditQty(editQty - 1);
    }
  }
  function handleSaveClick(): void {
    props.setShowChangeQty(!props.showChangeQty);
    props.setQty(editQty);
    props.updateTotalCost((editQty - props.qty) * props.itemPrice);
    props.updateTotalQty(editQty - props.qty);
    if (editQty === 0) {
      props.deleteItem();
    }
  }

  function handleCancelClick(): void {
    props.setShowChangeQty(!props.showChangeQty);
    setEditQty(props.qty);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEditQty(Number(event.target.value));
  }
  return (
    <div>
      <div>
        Price: <strong>${editTotalPrice}</strong>
      </div>
      Quantity:{" "}
      <input
        type="text"
        onChange={handleInputChange}
        value={editQty.toString()}
      />
      <button onClick={subtractQty} disabled={editQty === 0}>
        -
      </button>
      <button onClick={addQty}>+</button>
      <button onClick={handleSaveClick} disabled={editQty === props.qty}>
        Save
      </button>
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
}
