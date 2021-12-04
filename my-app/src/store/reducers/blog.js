import { createSlice } from '@reduxjs/toolkit';
import books from "../../data/books.json";

export const searchData = createSlice({
  name: 'dataBlog',
  initialState: {
    value: '',
    allBooks: books,
    books,
  },
  reducers: {
    searchBlog: (state, action) => {
      state.books = state.allBooks.filter((_) => {
        state.value = action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
        return _.title.indexOf(state.value) !== -1 || _.author.indexOf(state.value) !== -1
      });
    }
  }
})

export const { searchBlog } = searchData.actions

export default searchData.reducer

export const inputText = (state) => state.searchBlog.value;
export const dataBlogs = (state) => state.searchBlog.books;