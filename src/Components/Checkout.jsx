export default function Checkout({cart, setCart}) {
  function resetHandler() {
    document.getElementById("checkout-form").reset();
    setCart([]);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    const pluralBirds = cart.length > 1 ? "birds" : "bird";
    alert(`You have adopted ${cart.length} ${pluralBirds}. Thank you!`);
    resetHandler();
  }

  return (
    <>
      <form id="checkout-form" className="submit" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" required />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <label htmlFor="zipcode">Zip Code</label>
        <input type="number" id="zipcode" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
