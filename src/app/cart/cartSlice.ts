import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartProductsType } from '../types/product/productCardInterface';

export type CartState = {
  items: cartProductsType[];
  totalQuantity: number,
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const updateTotal = (state: CartState) => {
    state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
  };


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartProductsType>) => {
      const existing = state.items.find(item => item._id === action.payload._id && item.size === action.payload.size && item.color.nameColor === action.payload.color.nameColor);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      updateTotal(state)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      updateTotal(state)
    },
    clearCart: (state) => {
      state.items = [];
      updateTotal(state)
    },
    updateQuantityCart: (state, action: PayloadAction<{id:string; quantity:number}>) => {
      const index = state.items.findIndex(item => item._id === action.payload.id);
      if(index !== -1){
        state.items[index].quantity = action.payload.quantity;
      }
      updateTotal(state)
    },
    updateSizeCart: (state, action: PayloadAction<{id:string; size:number}>) => {
        const index = state.items.findIndex(item => item._id === action.payload.id);
        if(index !== -1){
          state.items[index].size = action.payload.size;
        }
    },
    updateColorCart: (state, action: PayloadAction<{id:string; color:{nameColor:string; _idColor:string}}>) => {
        const index = state.items.findIndex(item => item._id === action.payload.id);
        if(index !== -1){
          state.items[index].color = action.payload.color;
        }
    },
    resetCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});



export const {
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantityCart,
    updateSizeCart,
    updateColorCart,
    resetCart
  } = cartSlice.actions;
  

export default cartSlice.reducer;
