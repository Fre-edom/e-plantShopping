import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart reducer from CartSlice

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart state is managed by cartReducer
  },
});

export default store; // Export the store to be used in the app
