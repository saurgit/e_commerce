import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userId:null,
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    setCart:(state,action)=>{
      const {userId,products}=action.payload;
      state.userId=userId;
      state.products=products;
      state.total=products.reduce((acc,curr)=>acc + curr.productId.price * curr.quantity,0);
      state.quantity=products.length;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct ,setCart } = cartSlice.actions;
export default cartSlice.reducer;