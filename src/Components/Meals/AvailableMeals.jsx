import Card from "../Cards/Card";
import MealItem from "./MealItems/MealItem";
const DummyData = [
  {
    id: "1",
    name: "KashmiriPanner",
    description: "Sweet Subji",
    Price: 300,
  },
  {
    id: "1",
    name: "KashmiriPanner",
    description: "Sweet Subji",
    Price: 300,
  },
  {
    id: "1",
    name: "KashmiriPanner",
    description: "Sweet Subji",
    Price: 300,
  },
  {
    id: "1",
    name: "KashmiriPanner",
    description: "Sweet Subji",
    Price: 300,
  },
  {
    id: "1",
    name: "KashmiriPanner",
    description: "Sweet Subji",
    Price: 300,
  },
];

const AvailableMeals = () => {
  const mealList = DummyData.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.Price}
    />
  ));
  return (
    <section className=" relative z-[-1] drop-shadow-2xl p-4 -translate-y-20 rounded-3xl bg-slate-50 ml-4 mr-4 md:mb-9 md:w-3/5 md:ml-auto md:mr-auto ">
      <Card>
        <ul className="w-full">{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
