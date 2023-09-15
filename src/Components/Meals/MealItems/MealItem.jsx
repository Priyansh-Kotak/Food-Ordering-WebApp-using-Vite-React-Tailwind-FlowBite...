import { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    CartCtx.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className=" border-b-2 flex justify-between w-full my-4 md:flex md:ml-auto md:w-full md:p-4 md:justify-between  ">
      <div>
        <h3 className=" text-left text-lg font-bold">{props.name}</h3>
        <div className=" italic text-left">{props.description}</div>
        <div className=" text-yellow-500 text-left font-bold text-xl ">
          {price}
        </div>
      </div>

      <MealForm id={props.id} onAddToCart={onAddToCartHandler} />
    </li>
  );
};

export default MealItem;
