// import { useState } from "react";

export default function Checkout() {
  return (
    <>
      <form>
        <h3>Checkout</h3>
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" />

        <label htmlFor="name">Last Name</label>
        <input type="text" id="name" />

        <label htmlFor="name">Email</label>
        <input type="text" id="email" />

        <label htmlFor="name">Zip Code</label>
        <input type="number" id="zipcode" />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
