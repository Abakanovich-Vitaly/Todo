import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { deletePosts, togglePost } from '../store/postSlice'

const PostItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <Checkbox checked={completed} onChange={() => dispatch(togglePost({id}))} />
      <span>{text}</span>
      <DeleteIcon onClick={() => dispatch(deletePosts({ id }))} />
    </li>
  )
}

export default PostItem
