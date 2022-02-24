import { ADD_TODO } from '../../constant/actionTypes'

export const addTodo = (item) => {
  return { type: ADD_TODO, payload: item }
}
