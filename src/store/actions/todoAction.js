import {
  ADD_TODO,
  POST_ASYNC_TODO,
  REMOVE_TODO,
  FETCH_ASYNC_TODOS,
  SET_TODOS,
  DETELE_ASYNC_TODO,
  PUT_ASYNC_TODO,
  EDIT_TODO
} from '../../constant/actionTypes'

export const setTodos = (todos) => {
  return { type: SET_TODOS, payload: todos }
}

export const fetchAsyncTodos = () => {
  return { type: FETCH_ASYNC_TODOS }
}

export const addTodo = (item) => {
  return { type: ADD_TODO, payload: item }
}

export const postAsyncTodo = (title) => {
  return { type: POST_ASYNC_TODO, payload: title }
}

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id }
}

export const deleteAsyncTodo = (id) => {
  return { type: DETELE_ASYNC_TODO, payload: id }
}

export const editTodo = (todo) => {
  return { type: EDIT_TODO, payload: todo }
}

export const editAsyncTodo = (todo) => {
  return { type: PUT_ASYNC_TODO, payload: todo }
}
