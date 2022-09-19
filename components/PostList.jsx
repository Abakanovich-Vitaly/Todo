import PostItem from './PostItem'
import {useSelector} from 'react-redux'

const PostList = () => {
   const todos = useSelector(state => state.todos.todos)

  return (
    <ul>
      {todos.map((todo) => (
        <PostItem
          key={todo.id}          
          {...todo}
        ></PostItem>
      ))}
    </ul>
  )
}

export default PostList