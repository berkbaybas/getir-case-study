import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_STATUS
} from '../../constant/actionTypes'

export const addTodo = (item) => {
  return { type: ADD_TODO, payload: item }
}

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id }
}

export const changeStatusTodo = (id) => {
  return { type: CHANGE_STATUS, payload: id }
}
