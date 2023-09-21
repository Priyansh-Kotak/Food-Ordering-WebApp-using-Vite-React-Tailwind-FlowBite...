import Model from "../Cards/Modal";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartForm from "../Forms/CartForm";
import Alert from "../Alerts/Alert";
import Button from "./Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItems(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };

  const [buttonValue, setButtonValue] = useState(false);
  const [showForm, setshowForm] = useState(false);

  const formhandler = () => {
    console.log("Form button has clicked");
    setshowForm(true);
    setButtonValue(true);
  };

  const arrayFunction = () => {
    // Check if all elements in props.checkArray are false
    props.checkArray.map((event) => {
      console.log("Elements inside the array " + event);
    });
    console.log(
      "Checking every element inside the array " +
        props.checkArray.every((event) => event === true)
    );
    return props.checkArray.every((event) => event === true);
  };

  const [hideCart, sethideCart] = useState(true);
  const [cancelOrder, setcancelOreder] = useState(true);

  const hidecarthandler = (event) => {
    event.preventDefault();
    console.log("Submitted Form");
    sethideCart(false);
    console.log(hideCart);
    setcancelOreder(false);
    console.log("Cancel Order" + cancelOrder);
    props.checkArray.push(false);
  };

  // const cancelorder = () => {
  //   // setcancelOreder(false);
  //
  // };

  // useEffect(() => {
  //   cancelorder();
  //   checkArray;
  // }, [cancelOrder]);

  const cartItems = (
    <ul className="pb-3 md:max-h-[20rem] md:overflow-scroll max-h-[20rem] overflow-scroll  ">
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          arrayFunction={arrayFunction()}
        />
      ))}
    </ul>
  );

  return (
    <Model
      onClose={props.onClose}
      onhideCart={hideCart}
      onshowAlert={!hideCart}
    >
      {cartItems}
      <div className="flex justify-between pb-4 ">
        <span className=" font-bold text-2xl">TotalAmount</span>
        <span className="font-bold text-2xl">{totalAmount}</span>
      </div>
      <div className="flex justify-around md:flex md:justify-end">
        {!showForm && (
          <button
            onClick={props.onClose}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Close
          </button>
        )}

        {hasItems && !showForm && arrayFunction() ? (
          <button
            onClick={formhandler}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 mb-2 inline-flex items-center dark:bg-blue-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:focus:ring-blue-800"
          >
            <svg
              className="w-3.5 h-3.5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Buy now
          </button>
        ) : (
          <Button checkArray={props.checkArray} reRender={arrayFunction} />
        )}
      </div>

      {showForm && <CartForm hidecarthandler={hidecarthandler} />}
    </Model>
  );
};

export default Cart;
