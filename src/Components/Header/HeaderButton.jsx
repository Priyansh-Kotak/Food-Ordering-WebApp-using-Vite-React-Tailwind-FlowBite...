import { useContext } from "react";
import CartContext from "../../store/cart-Context"


const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;
  return (
    <>
      <button
        onClick={props.onclick}
        type="button"
        className="md:hidden  relative inline-flex items-center p-3 text-sm font-medium text-center ml-auto mr-5 text-white  rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-36"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          {numberOfCartItems}
        </div>
      </button>

      <button
        onClick={props.onclick}
        type="button"
        className=" text-lg items-center ml-auto  w-36 pl-6  mr-20 px-3 py-2.5 font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hidden md:inline-flex"
      >
        <svg
          className="w-4 h-3.5 mr-2 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
        Cart
        <span className="inline-flex items-center justify-center w-6 h-6 ml-2 text-xs font-semibold text-white bg-red-800 border-2 border-white  rounded-full">
          {numberOfCartItems}
        </span>
      </button>
    </>
  );
};

export default HeaderButton;
