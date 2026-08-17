import { configureStore } from "@reduxjs/toolkit";
import MyCart from "./CartSlice";

const Store = configureStore({
    reducer:{
        MyCart:MyCart
    }
})
export default Store;