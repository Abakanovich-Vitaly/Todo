import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import InputForm from './components/InputForm'
import { useDispatch } from 'react-redux'
import { addPost } from './store/postSlice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch(addPost({ text }))
    setText('')
  }

  return (
    <div className="App">
      <InputForm text={text} handleInput={setText} addPost={addTodo} />
      <PostList />      
    </div>
  )
}

export default App
