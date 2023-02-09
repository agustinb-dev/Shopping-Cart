import "./App.css";
import { ShoppingCart } from "./Components/ShoppingCartComponent";

const SHOPPING_CART_ITEMS = [
  {
    id: "1",
    name: "Eggs",
    price: 2.99,
    quantity: 1,
  },
  {
    id: "2",
    name: "Milk",
    price: 1.99,
    quantity: 2,
  },
  {
    id: "3",
    name: "Cheese",
    price: 3.99,
    quantity: 3,
  },
];

function App() {
  return <ShoppingCart items={SHOPPING_CART_ITEMS} />;
}

export default App;
