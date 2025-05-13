import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../slicer/categorySlice'

export default configureStore({
  reducer: {
  category: categorySlice  
  },
  
})
