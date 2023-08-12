import MainMenuItem from "@/app/types/MainMenuItem";
import mainMenu from "../../constants/mainMenu";

import MenuCard from "./MenuCard";

const MainMenu = () => {
  return (
    <section>
      <h2 className="visually-hidden">Main Menu</h2>
      <ul
        id="main-menu"
        className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-8 text-current"
      >
        {mainMenu.map((menuCard: MainMenuItem) => (
          <MenuCard key={menuCard.id} menuCard={menuCard} />
        ))}
      </ul>
    </section>
  );
};

export default MainMenu;
