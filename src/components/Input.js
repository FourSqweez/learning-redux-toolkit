import './Input.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

export default function Input() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodo = () => {
    console.log(`Adding ${input}`)
    setInput('')

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    )
  }
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  )
}
