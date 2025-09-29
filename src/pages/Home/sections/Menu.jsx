import MenuCard from "../../../component/MenuCard";
import { coffeeList } from "../../../constent";

const Menu = () => {
  return (
    <section
      id="Menu"
      className="bg-black text-white p-6 flex flex-col items-center"
    >
      <div className="pb-6">
        <h1 className="text-red-700 font-bold font-dancing text-6xl">Menu </h1>
      </div>

      <div className="flex flex-wrap justify-evenly gap-4">
        {coffeeList.map((coffee) => (
          <MenuCard
            key={coffee.id}
            img={coffee.img}
            name={coffee.name}
            price={coffee.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
