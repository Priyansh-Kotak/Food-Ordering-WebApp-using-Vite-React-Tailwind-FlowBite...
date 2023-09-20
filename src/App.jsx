// eslint-disable-next-line react/display-name

import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import FooterWithSocialMediaIcons from "./Components/Footer/FooterWithSocialMediaIcons";
import InputForm from "./Components/Forms/InputForm";
function App() {
  const [showCart, setshowCart] = useState(false);

  const onShowCart = () => {
    setshowCart(true);
  };

  const hideCart = () => {
    setshowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <InputForm onhideCart={hideCart} />}
      <Header onshowCart={onShowCart} />
      <main>
        <Meals />
      </main>
      <div>
        <FooterWithSocialMediaIcons />
      </div>
    </CartProvider>
  );
}

export default App;
