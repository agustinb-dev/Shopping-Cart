import { useState } from "react";
import { Item } from "./ItemComponent";
import { ShoppingCartSummary } from "./ShoppingCartSummaryComponent";

export function ShoppingCart(props: { items: Array<any> }): JSX.Element {
  const [totalQty, setTotalQty] = useState(6);
  const [totalCost, setTotalCost] = useState(18.94);
  const [showItems, setShowItems] = useState(true);
  const items = props.items;

  const updateTotalCost = (delta: number) => {
    setTotalCost(totalCost + delta);
  };

  const updateTotalQty = (delta: number) => {
    setTotalQty(totalQty + delta);
  };

  const removeItem = (qty: number, totalPrice: number) => {
    setTotalCost(totalCost - totalPrice);
    setTotalQty(totalQty - qty);
  };

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <ShoppingCartSummary
        totalQty={totalQty}
        totalCost={totalCost}
        setShowItems={setShowItems}
        setTotalCost={setTotalCost}
        setTotalQty={setTotalQty}
      />
      {showItems && (
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              price={item.price}
              defaultQty={item.quantity}
              updateTotalCost={updateTotalCost}
              updateTotalQty={updateTotalQty}
              removeItem={removeItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
