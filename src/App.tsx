import { useState } from 'react'
import { TodoFilters } from './components/TodoFilters.tsx'
import { TodoForm } from './components/TodoForm.tsx'
import { TodoItem } from './components/TodoItem.tsx'
import type { Filter, Todo } from './types.ts'
import { useTodos } from './useTodos.ts'

function matchesFilter(todo: Todo, filter: Filter): boolean {
  if (filter === 'active') {
    return !todo.completed
  }
  if (filter === 'completed') {
    return todo.completed
  }
  return true
}

function App() {
  const { todos, addTodo, toggleTodo, renameTodo, deleteTodo, clearCompleted } = useTodos()
  const [filter, setFilter] = useState<Filter>('all')

  const visibleTodos = todos.filter((todo) => matchesFilter(todo, filter))
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <main className="app">
      <h1>Corporate Todo</h1>
      <TodoForm onAdd={addTodo} />
      {todos.length === 0 ? (
        <p className="empty">Nothing to do yet. Add your first todo above.</p>
      ) : (
        <>
          <ul className="todo-list">
            {visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onRename={renameTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
          {visibleTodos.length === 0 && <p className="empty">No {filter} todos.</p>}
          <TodoFilters
            filter={filter}
            activeCount={activeCount}
            completedCount={completedCount}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        </>
      )}
    </main>
  )
}

export default App
