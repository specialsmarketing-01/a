import { ConnexDish } from "./ConnexDish";
import { ConnexOder } from "./ConnexOder";

type Dish = { title: string; description?: string };

export function ConnexDishList({ dishes }: { dishes: readonly Dish[] }) {
  return (
    <>
      {dishes.map((dish, index) => (
        <div key={dish.title}>
          {index > 0 ? <ConnexOder /> : null}
          <ConnexDish title={dish.title} description={dish.description} />
        </div>
      ))}
    </>
  );
}
