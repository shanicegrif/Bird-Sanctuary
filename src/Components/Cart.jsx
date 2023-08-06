import bonusItems from "../data/bonusItems";
export default function Cart({ cart, setCart }) {
  let total = cart.reduce((total, item) => total + item.amount, 0);

  function removeItem(target) {
    const currentCart = [...cart];
    currentCart.splice(target, 1);
    setCart(currentCart);
  }

  const qualifyingBounusItems =
    total >= 100 && total < 300
      ? bonusItems.splice(0, 1)
      : total >= 300 && total < 500
      ? bonusItems.splice(0, 2)
      : total >= 500 && total < 1000
      ? bonusItems.splice(0, 3)
      : total >= 1000
      ? bonusItems
      : [];

    const discount = cart.length >= 3 ? 10 : 0;
    const multipler = cart.length >= 3 ? 0.9 : 1;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Discount: {discount}% </h4>
      <h4>Total: ${(total * multipler).toFixed(2)}</h4>
      <ol>
        {cart.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              {item.name}{" "}
              <button onClick={() => removeItem(index)}> Remove </button>{" "}
            </li>
          );
        })}
      </ol>

      {cart.length >= 1 ? (
        <>
            <p>Your donations has qualified you for the following items: </p>
            <ul>
                {qualifyingBounusItems.map((bonusItem) => {
                   return <li>{bonusItem}</li>
                })}
            </ul>
        </>
      ) : null}

      {/* <ul>
        {total >= 100 ? <li>{bonusItems[0]}</li> : null}
        {total >= 300 ? <li>{bonusItems[1]}</li> : null}
        {total >= 500 ? <li>{bonusItems[2]}</li> : null}
        {total >= 1000 ? <li>{bonusItems[3]}</li> : null}
      </ul> */}
    </div>
  );
}
