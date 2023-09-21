import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import MealItem from "./MealItems/MealItem";
import Loader from "../Loader/Loader";

const AvailableMeals = (props) => {
  const [availableMeals, setavailabelMeals] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  let content = (
    <h1 className=" text-center text-xl font-bold">
      Something went wrong .....
    </h1>
  );
  useEffect(() => {
    const fetchMeal = async () => {
      seterror(null);
      setisLoading(true);
      setTimeout(() => {
        setisLoading(false);
        content;
      }, 5000);

      try {
        const response = await fetch(
          "https://food-ordering-app-a7974-default-rtdb.firebaseio.com/food-ordering-app.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrongg ......");
        }
        const data = await response.json();

        const loadmeals = [];

        for (const key in data) {
          loadmeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            Price: data[key].Price,
          });
        }

        setavailabelMeals(loadmeals);
      } catch (error) {
        seterror(error.message);
      }
    };
    setisLoading(false);

    fetchMeal();
  }, []);

  if (isloading) {
    content = <Loader className=" flex justify-center text-center" />;
  }

  if (availableMeals.length > 0) {
    content = availableMeals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.Price}
        checkArray={props.checkArray} 
      />
    ));
  }

  return (
    <section className=" relative drop-shadow-2xl p-4 md:-translate-y-16 -translate-y-16  rounded-3xl bg-slate-50 ml-4 mr-4 md:mb-9 md:w-3/5 md:ml-auto md:mr-auto ">
      <Card>
        <ul className="w-full">{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
