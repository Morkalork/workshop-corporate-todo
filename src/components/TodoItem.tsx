import { useState, type KeyboardEvent } from 'react'
import type { Todo } from '../types.ts'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onRename: (id: string, title: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onRename, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)

  const startEditing = (): void => {
    setDraft(todo.title)
    setIsEditing(true)
  }

  const commitEdit = (): void => {
    if (draft.trim() !== '') {
      onRename(todo.id, draft)
    }
    setIsEditing(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      commitEdit()
    } else if (event.key === 'Escape') {
      setIsEditing(false)
    }
  }

  return (
    <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <input
        type="checkbox"
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'not done' : 'done'}`}
        checked={todo.completed}
        onChange={() => {
          onToggle(todo.id)
        }}
      />
      {isEditing ? (
        <input
          className="todo-edit"
          type="text"
          aria-label="Edit todo"
          autoFocus
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value)
          }}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="todo-title" onDoubleClick={startEditing} title="Double-click to edit">
          {todo.title}
        </span>
      )}
      <button
        type="button"
        className="todo-delete"
        aria-label={`Delete "${todo.title}"`}
        onClick={() => {
          onDelete(todo.id)
        }}
      >
        ×
      </button>
    </li>
  )
}
