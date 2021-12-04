import { configureStore } from '@reduxjs/toolkit'
import searchBlog from './reducers/blog';

export default configureStore({
  reducer: {
    searchBlog,
  },
});