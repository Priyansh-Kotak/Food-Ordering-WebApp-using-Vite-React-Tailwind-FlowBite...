import AvailableMeals from "./AvailableMeals";
const Meals = (props) => {
  console.log("I am inside Meal js file");

  return (
    <section>
      <AvailableMeals
        checkArray={props.checkArray}
        arrayFunction={props.arrayFunction}
        onhideCart={props.onhideCart}
        onshowCart={props.onshowCart}
      />
    </section>
  );
};

export default Meals;
