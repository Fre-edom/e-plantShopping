import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);

      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove item from the cart by its name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find the item in the cart by its name
      const item = state.items.find(item => item.name === name);

      if (item) {
        // If item is found, update its quantity
        item.quantity = quantity;
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in store.js
export default CartSlice.reducer;
