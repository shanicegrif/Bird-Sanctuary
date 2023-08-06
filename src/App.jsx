import { useState } from "react";
import birdData from "./data/birds"
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import BirdList from "./Components/BirdList";

function App () {
  const [bird, setBird] = useState(birdData)
  const [cart, setCart] = useState([]);


  return (
    <div>
      {/* <Cart/> */}
      <Checkout/>
      <div className="birds"> <BirdList bird = {bird} /> </div>
    </div>
  );
};

export default App;
