import Cart from "../Cart/Cart";
export default function InputForm(props) {
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
      onshowCart={props.onshowCart}
    ></Cart>
  );
}
