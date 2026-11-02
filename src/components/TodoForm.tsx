import { useState, type FormEvent } from 'react'

interface TodoFormProps {
  onAdd: (title: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (title.trim() === '') {
      return
    }
    onAdd(title)
    setTitle('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="New todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
        }}
      />
      <button type="submit" disabled={title.trim() === ''}>
        Add
      </button>
    </form>
  )
}
