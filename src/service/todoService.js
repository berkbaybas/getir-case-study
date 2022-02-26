import api from '../utils/api'

export const getTodos = async () => {
  const response = await api.get('todos')
  return response.data
}

export const postTodo = async (title) => {
  const todo = { title, isCompleted: false }
  const response = await api.post('todos', todo)
  return response.data
}

export const putTodo = async (todo) => {
  const { id } = todo
  const response = await api.put(`todos/${id}`, todo)
  return response.data
}

export const deleteTodo = async (id) => {
  const response = await api.delete(`todos/${id}`)
  return response.data
}
