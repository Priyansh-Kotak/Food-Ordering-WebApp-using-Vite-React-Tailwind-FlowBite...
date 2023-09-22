// eslint-disable-next-line react/display-name

import Header from "./Components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import FooterWithSocialMediaIcons from "./Components/Footer/FooterWithSocialMediaIcons";
import InputForm from "./Components/Forms/InputForm";
function App() {
  const [showCart, setshowCart] = useState(false);
  const [checkArray, setcheckArray] = useState([]);

  console.log("I am inside App js file");
  const onShowCart = () => {
    setshowCart(true);
  };

  const hideCart = () => {
    setshowCart(false);
  };

  const arrayFunction = () => {
    // Check if all elements in props.checkArray are false
    checkArray.map((event) => {
      console.log("Elements inside the array " + event);
    });
    console.log(
      "Checking every element inside the array " +
        checkArray.every((event) => event === true)
    );
    return checkArray.every((event) => event === true);
  };

  // const checkArray = [true];
  return (
    <CartProvider>
      {showCart && (
        <InputForm
          onhideCart={hideCart}
          checkArray={checkArray}
          arrayFunction={arrayFunction}
          onshowCart={onShowCart}
        />
      )}
      <Header onshowCart={onShowCart} />
      <main>
        <Meals
          checkArray={checkArray}
          arrayFunction={arrayFunction}
          onhideCart={hideCart}
          onshowCart={onShowCart}
        />
      </main>
      <div>
        <FooterWithSocialMediaIcons />
      </div>
    </CartProvider>
  );
}

export default App;
