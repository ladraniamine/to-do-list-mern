import React from 'react'
import { useRef } from 'react'
import {useDispatch} from "react-redux"
import { postTask } from '../redux/slice/taskSlice'
const Add = () => {
  const input = useRef()
  const dispatch = useDispatch()

  const handleAddNewTask = ()=>{
    const content = input.current.value
    //dispath content value to the post request
    dispatch(postTask({content}))
    //fill the value of input
    input.current.value = ""
  }

  return (
    <div className='add'>
        <input ref={input} className='add-input' type="text"  />
        <button className='add-btn' onClick={handleAddNewTask}>add</button>
    </div>
  )
}

export default Add