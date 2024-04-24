import MenuItem from './MenuItem'

const MenuCategory = ({title, categoryItems}) => {
  return (
    <div className="menuCategory">
      <h2>{title}</h2>
      {
        categoryItems?.map((item)=>{
            return <MenuItem key={item.card.info.id} itemData={item.card.info}/>
        })
      }
    </div>
  );
};

export default MenuCategory;
