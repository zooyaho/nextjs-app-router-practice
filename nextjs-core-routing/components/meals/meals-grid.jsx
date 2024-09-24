import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-20 w-[90%] max-w-[90rem] mx-auto my-8 list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem key={meal.id} {...meal} />
        </li>
      ))}
    </ul>
  );
}
