import { useState } from "react";
import Model from "../Cards/Modal";
// import Cart from "../Cart/Cart";
import Form from "./CartForm";
import Cart from "../Cart/Cart";
export default function InputForm(props) {
  const [showAlert, setshowAlert] = useState(true);

  // const hidecarthandler = (event) => {
  //   event.preventDefault();
  //   setshowAlert(false);
  //   console.log("Form is submitted");
  // };

  console.log("I am inside InputForm js file");

  return (
    <Cart
      onClose={props.onhideCart}
      checkArray={props.checkArray}
      arrayFunction={props.arrayFunction}
    ></Cart>
  );
}
