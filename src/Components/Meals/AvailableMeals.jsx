import Card from "../Cards/Card";
import MealItem from "./MealItems/MealItem";
const DummyData = [
  
  {
    id: 'm2',
    name: 'Pizza',
    description: 'A german specialty!',
    Price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'HamBurger',
    Price: 12.99,
  },
  {
    id: 'm4',
    name: 'Butter Naan',
    description: 'Best ever Nan',
    Price: 18.99,
  },
  {
    id: 'm5',
    name: 'Tomato Soup',
    description: 'Healthy...and green...',
    Price: 18.99,
  },
  {
    id: 'm6',
    name: 'Sandwiches',
    description: 'Cheesy...',
    Price: 18.99,
  },
  {
    id: 'm7',
    name: 'Hot Dog',
    description: 'Best American.. ',
    Price: 18.99,
  },
  {
    id: 'm1',
    name: 'Panner Tikka',
    description: 'Punjabi Tadka',
    Price: 22.99,
  },

];

const AvailableMeals = () => {
  const mealList = DummyData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.Price}
    />
  ));
  return (
    <section className=" relative drop-shadow-2xl p-4 md:-translate-y-16 -translate-y-16  rounded-3xl bg-slate-50 ml-4 mr-4 md:mb-9 md:w-3/5 md:ml-auto md:mr-auto ">
      <Card>
        <ul className="w-full">{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
