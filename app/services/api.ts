const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/todos';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Get all todos
export async function fetchTodos(): Promise<Todo[]> {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error('Failed to fetch todos');
    const result: ApiResponse<Todo[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}

// Create a new todo
export async function createTodo(text: string, priority: 'low' | 'medium' | 'high'): Promise<Todo> {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, priority }),
    });
    if (!response.ok) throw new Error('Failed to create todo');
    const result: ApiResponse<Todo> = await response.json();
    return result.data!;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
}

// Toggle todo completion
export async function toggleTodo(id: string): Promise<Todo> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/toggle`, {
      method: 'PATCH',
    });
    if (!response.ok) throw new Error('Failed to toggle todo');
    const result: ApiResponse<Todo> = await response.json();
    return result.data!;
  } catch (error) {
    console.error('Error toggling todo:', error);
    throw error;
  }
}

// Update todo
export async function updateTodo(
  id: string,
  updates: { text?: string; completed?: boolean; priority?: string }
): Promise<Todo> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update todo');
    const result: ApiResponse<Todo> = await response.json();
    return result.data!;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
}

// Delete a todo
export async function deleteTodo(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete todo');
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
}

// Delete all completed todos
export async function deleteCompletedTodos(): Promise<number> {
  try {
    const response = await fetch(`${API_BASE_URL}/completed/all`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete completed todos');
    const result: ApiResponse<any> = await response.json();
    return result.data?.deletedCount || 0;
  } catch (error) {
    console.error('Error deleting completed todos:', error);
    throw error;
  }
}

// Get statistics
export async function getStats(): Promise<{ total: number; active: number; completed: number }> {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`);
    if (!response.ok) throw new Error('Failed to fetch stats');
    const result: ApiResponse<any> = await response.json();
    return result.data || { total: 0, active: 0, completed: 0 };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
}

