import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const postSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addPost(state, action) {     
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
      })
    },
    deletePosts(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    togglePost(state, action) {
      const togglePost = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      togglePost.completed = !togglePost.completed
    },
  },
})

export const { addPost, deletePosts, togglePost } = postSlice.actions

export default postSlice.reducer
