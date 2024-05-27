import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({
  title,
  categoryItems,
  showMenuItems,
  categoryIndex,
  expandCategoryHook,
}) => {
  return (
    <div className="bg-sky-50 p-6 rounded-3xl my-8">
      <div
        className="flex justify-between text-2xl font-bold mb-6 cursor-pointer"
        onClick={() => {
          showMenuItems
            ? expandCategoryHook(-1)
            : expandCategoryHook(categoryIndex);
        }}
      >
        <span>
          {title}({categoryItems.length})
        </span>
        <span>🔽</span>
      </div>
      <div hidden={!showMenuItems}>
        {categoryItems?.map((item) => {
          return <MenuItem key={item.card.info.id} itemData={item.card.info} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
