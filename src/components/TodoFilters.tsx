import type { Filter } from '../types.ts'

const FILTERS: Filter[] = ['all', 'active', 'completed']

interface TodoFiltersProps {
  filter: Filter
  activeCount: number
  completedCount: number
  onFilterChange: (filter: Filter) => void
  onClearCompleted: () => void
}

export function TodoFilters({
  filter,
  activeCount,
  completedCount,
  onFilterChange,
  onClearCompleted,
}: TodoFiltersProps) {
  return (
    <footer className="todo-footer">
      <span>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>
      <div className="todo-filters" role="group" aria-label="Filter todos">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            className={filter === option ? 'selected' : undefined}
            onClick={() => {
              onFilterChange(option)
            }}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
      <button type="button" onClick={onClearCompleted} disabled={completedCount === 0}>
        Clear completed
      </button>
    </footer>
  )
}
