import AvailableMeals from "./AvailableMeals";
const Meals = (props) => {
  return (
    <section>
      <AvailableMeals checkArray={props.checkArray}  />
    </section>
  );
};

export default Meals;
