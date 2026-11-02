import { useEffect, useState } from 'react'
import type { Todo } from './types.ts'

const STORAGE_KEY = 'corporate-todo:todos'

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) {
      return []
    }
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed as Todo[]
  } catch {
    return []
  }
}

function saveTodos(todos: Todo[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    // Storage can be unavailable (private mode, quota); the list still works in memory.
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = (title: string): void => {
    const trimmed = title.trim()
    if (trimmed === '') {
      return
    }
    const todo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos((prev) => [...prev, todo])
  }

  const toggleTodo = (id: string): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return { ...todo, completed: !todo.completed }
      }),
    )
  }

  const renameTodo = (id: string, title: string): void => {
    const trimmed = title.trim()
    if (trimmed === '') {
      return
    }
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return { ...todo, title: trimmed }
      }),
    )
  }

  const deleteTodo = (id: string): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearCompleted = (): void => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  return { todos, addTodo, toggleTodo, renameTodo, deleteTodo, clearCompleted }
}
