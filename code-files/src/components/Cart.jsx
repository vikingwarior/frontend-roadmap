import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../utils/redux/cartSlice";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const item1 = {
    id: "102107468",
    name: "McSpicy Chicken Burger + McChicken Burger + Fries (M)",
    category: "Match Time Sharing Combos",
    description:
      "Flat 15% Off on McSpicy Chicken Burger + McChicken Burger + Fries (M)",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/6/5/8c87d83a-310b-44b3-84ce-79cbb310bc16_96c8bb84-bce1-4948-a5f0-e74f5e9a94f8.png",
    inStock: 1,
    price: 43714,
  };
  const item2 = {
    id: "117967331",
    name: "McVeggie Burger + 2 Fries (M) + McAloo Tikki+ Veg Pizza McPuff",
    category: "Match Time Sharing Combos",
    description:
      "Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/6/5/d26c6bc2-7a4f-4ff3-a3e1-c0033302cdd4_d67286a3-7da9-402f-a921-269fc38fdccb.png",
    inStock: 1,
    isVeg: 1,
    price: 39143,
  };
  const item3 = {
    id: "123196854",
    name: "2 Chicken Maharaja Mac Burger + 2 Coke + Fries (L) + McFlurry Oreo (M)",
    category: "Match Time Sharing Combos",
    description:
      "Enjoy 2 of the tallest burgers innovated by us. Created with chunky juicy grilled chicken patty paired along with fresh ingredients like jalapeno, onion, slice of cheese, tomatoes & crunchy lettuce dressed with the classical Habanero sauce. Served with Coke, Large Fries and a medium McFlurry Oreo",
    imageId: "65c9c9b82c4d1f77a05dc4d89c9ead1d",
    inStock: 1,
    price: 61048,
  };

  return (
    <div id="itemsCart" className="text-center m-4 p-4">
      <h1 className="text-4xl font-bold">Cart</h1>
      <div id="items" className="">
        {cartItems.map((item) => {
            return <CartItem key={item.id} itemData={item}/>
        })}
        {/* <CartItem itemData={item1} />
        <CartItem itemData={item2} />
        <CartItem itemData={item3} /> */}
      </div>
      <div id="cart-btn-div" className="">
        <button className="auth button p-2 my-3" onClick={() => {
            dispatch(emptyCart())
        }}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
