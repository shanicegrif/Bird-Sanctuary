export default function Checkout({cart, setCart}) {

  const zipRegex = /^\d{5}(?:-\d{4})?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
  function validation() {
    const form = document.getElementById("checkout-form");
      if(!emailRegex.test(form.email.value)){ 
          alert("Wrong input on email");
          return false;
      }
      if(!zipRegex.test(form.zipcode.value)){
          alert("Wrong input on zip code");
          return false;
      }
      if(cart.length == 0){
          alert("Your cart is empty");
          return false;
      }
      
      return true;
  }

  function resetHandler() {
    document.getElementById("checkout-form").reset();
    setCart([]);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      const pluralBirds = cart.length > 1 ? "birds" : "bird";
      alert(`You have adopted ${cart.length} ${pluralBirds}. Thank you!`);
      resetHandler();
    }
  }
  

  return (
    <div className="checkout">
      <form id="checkout-form" className="submit" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" required />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email"  required />

        <label htmlFor="zipcode">Zip Code</label>
        <input type="number" id="zipcode"  required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
