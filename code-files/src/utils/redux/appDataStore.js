import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

/*
Basic Terminology:

    Redux Store: A central singular unit containing the data in slices.

    Slices: Individual data nodes that store data as per specified format which comes together to form a store.

    Action: The event that is triggered when a change in the state or value of an obseserved property takes place.

    Reducer: Method invoked by an action to trigger an update cycle for the specified Slice/s

    Subscriber: The property/component/method that depends on the value/s provided by store 

Redux Cycles ->

    Updation Cycle:
    Button Clicked![state changed] ---| Dispatches |---> Action ---| Invokes |---> Reducer ---|Updates|---> Slice.

    Read Cycle:
    Compo
 */

const appDataStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appDataStore;
