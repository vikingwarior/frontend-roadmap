import { useState } from "react";
import MenuCategory from "./MenuCategory";

const RestaurantMenuBody = ({ menuBodyData }) => {
  let menuCategoryIdNo = 0;

  const getCategoryProps = (item) => {
    return {
      title: item.card.card.title,
      itemCards: item.card.card.itemCards,
    };
  };

  const [menuCategoryToDisplay, setMenuCategoryToDisplay] = useState(0);
  const menuItemsToDisplay = menuBodyData.filter((item) =>
    item?.card?.card?.hasOwnProperty("itemCards")
  );

  return (
    <div className="">
      {menuItemsToDisplay.map((item, index) => {
        const { itemCards, title } = getCategoryProps(item);
        return (
          <MenuCategory
            key={`menu-item-category-${menuCategoryIdNo++}`}
            title={title}
            categoryItems={itemCards}
            showMenuItems={index === menuCategoryToDisplay ? true : false}
            categoryIndex={index}
            expandCategoryHook={setMenuCategoryToDisplay}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuBody;
