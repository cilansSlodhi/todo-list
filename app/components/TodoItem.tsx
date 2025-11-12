'use client';

import { Todo } from '../types/todo';
import { Trash2, Circle, CheckCircle2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    high: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className={`group flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
      todo.completed 
        ? 'bg-gray-50 border-gray-200 dark:bg-gray-900/50 dark:border-gray-800' 
        : 'bg-white border-gray-200 dark:bg-gray-800/50 dark:border-gray-700'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className="mt-1 flex-shrink-0 transition-transform hover:scale-110"
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? (
          <CheckCircle2 className="w-6 h-6 text-green-500" />
        ) : (
          <Circle className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className={`text-base transition-all ${
          todo.completed 
            ? 'text-gray-500 line-through dark:text-gray-500' 
            : 'text-gray-900 dark:text-gray-100'
        }`}>
          {todo.text}
        </p>
        <div className="flex items-center gap-2 mt-2">
          {todo.priority && (
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[todo.priority]}`}>
              {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
            </span>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
        aria-label="Delete todo"
      >
        <Trash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}


