import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import clickSlice from './slices/clickSlice';


export const store = configureStore({
  reducer: {
    
    clicks: clickSlice,
    products: productSlice,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});