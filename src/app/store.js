import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../slicer/categorySlice';
import userReducer from '../slicer/UserSlice';

export default configureStore({
  reducer: {
    category: categorySlice,
    user: userReducer
  }
});
