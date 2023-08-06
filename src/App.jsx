import { useState } from "react";
import birdData from "./data/birds"
import Checkout from "./Components/Checkout";
import BirdList from "./Components/BirdList";
import Cart from "./Components/Cart";

function App () {
  const [bird, setBird] = useState(birdData)
  const [cart, setCart] = useState([])




  return (
    <div>
      <Cart cart={cart} setCart = {setCart} />
      <Checkout cart = {cart} setCart = {setCart} />
      <div className="birds"> <BirdList bird = {bird} setCart = {setCart} /></div>
    </div>
  );
};

export default App;
