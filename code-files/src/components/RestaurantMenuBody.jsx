import MenuCategory from "./MenuCategory";

const RestaurantMenuBody = ({ menuBodyData }) => {
  let menuCategoryIdNo = 0;

  const getCategoryProps = (item) => {
    return { 
      title: item.card.card.title, 
      itemCards: item.card.card.itemCards 
    };
  };

  return (
    <div className="menuBody">
      {menuBodyData.map((item) => {
        if (item.card.card.hasOwnProperty("itemCards")) {
          const { itemCards, title } = getCategoryProps(item);
          return (
            <MenuCategory
              key={`menu-item-category-${menuCategoryIdNo++}`}
              title={title}
              categoryItems={itemCards}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMenuBody;
