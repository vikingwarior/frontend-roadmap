import { CDN_URL } from "../utils/constants";

const CartItem = ({ itemData }) => {
  const { name, price, imageId} = itemData;

  return (
    <div className="rounded-md border p-6 border-black mx-auto my-4 w-6/12 flex justify-between align-middle">
      <div className="my-auto text-left">
        <h3 className="text-xl">{name}</h3>
        <h4 className="font-bold">₹{price / 100}</h4>
      </div>
      <div>
        <img src={CDN_URL + imageId} className="size-40" />
      </div>
    </div>
  );
};

export default CartItem;
