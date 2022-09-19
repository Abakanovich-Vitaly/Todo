import React from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'



const InputForm = ({text, handleInput, addPost}) => {
  return (
    <label htmlFor="">
      <Input
        className="input__post"
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <Button onClick={addPost}>Add Post</Button>
    </label>
  )
}

export default InputForm