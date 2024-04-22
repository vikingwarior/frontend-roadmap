import MenuCategory from "./MenuCategory";
import resMenu from "../utils/sample-res-menu";

const RestaurantMenuBody = () => {
  let menuData = resMenu.menu.pl.data.data.cards[6].cards;
  let menuCategoryIdNo = 0;

  return (
    <div className="menuBody">
      {menuData.map((item) => {
        if (item.hasOwnProperty("itemCards")) {
          return (
            <MenuCategory
              key={`menu-item-category-${menuCategoryIdNo++}`}
              title={item.title}
              categoryItems={item.itemCards}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMenuBody;
