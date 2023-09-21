import { useRef, useState } from "react";
import Input from "../../Cards/Input";

const MealForm = (props) => {
  const [amountValid, setamountValid] = useState(true);
  const amountInputref = useRef();
  const submithandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputref.current.value;
    const enterAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setamountValid(false);
      return;
    }

    props.onAddToCart(enterAmountNumber);
  };

  const arrayFunction = () => {
    // Check if all elements in props.checkArray are false
    props.checkArray.map((event) => {
      console.log("Elements inside the array " + event);
    });
    console.log(
      "Checking every element inside the array " +
        props.checkArray.every((event) => event === false)
    );
    return props.checkArray.every((event) => event === true);
  };

  return (
    <form
      className="md:my-1 md:p-1 font-bold md:text-xl my-1 p-1"
      onSubmit={submithandler}
    >
      <Input
        ref={amountInputref}
        label="Quantity"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {arrayFunction() && (
        <button
          type="submit"
          className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-1 mb-1 "
        >
          Add +
        </button>
      )}
      {!amountValid && <p>Please enter a valid number (1-5)</p>}
    </form>
  );
};

export default MealForm;
