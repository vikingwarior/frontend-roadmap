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
          /**
           * This is a controlled component.
           * 
           * Controlled Component:
           * A controlled component is a component whose state, properties, etc. are controlled by another component
           * mostly the parent component.
           * 
           * Props Drilling:
           * The process of passing data using props from a component higher in the heirarchy to a component in the
           * lower heirarchy is props drilling, usually props drilling is not recommended for the data to the components
           * nested for more than 2 layers. For that use of Context is recommended.
           * 
           */
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
