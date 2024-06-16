import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const MenuItem = ({ itemData }) => {
  const { name, price, description, ratings } = itemData;
  const rating = ratings.aggregatedRating.rating || 0;
  const ratingCount = ratings.aggregatedRating.ratingCountV2 || 0;

  const dispatch = useDispatch();

  return (
    <div className="">
      <h3>{name}</h3>
      <h4>₹{price / 100}</h4>
      <h5>
        {rating}({ratingCount})
      </h5>
      <p>{description}</p>
      <button
        className="auth button p-2 my-3"
        onClick={() => {
          console.log(itemData);
          dispatch(addItem(itemData));
        }}
      >
        Add +
      </button>
      <hr />
    </div>
  );
};

export default MenuItem;
