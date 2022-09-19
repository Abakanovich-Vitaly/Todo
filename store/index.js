import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice.js'

export default configureStore({
  reducer: {
    todos: postReducer
  },
})
