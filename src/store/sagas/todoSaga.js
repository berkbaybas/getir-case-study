import { put, call, takeEvery } from 'redux-saga/effects'

import {
  postTodo,
  getTodos,
  putTodo,
  deleteTodo
} from '../../service/todoService'
import {
  POST_ASYNC_TODO,
  FETCH_ASYNC_TODOS,
  DETELE_ASYNC_TODO,
  PUT_ASYNC_TODO
} from '../../constant/actionTypes'
import { setTodos, addTodo, removeTodo, editTodo } from '../actions/todoAction'

export function* fetchSaga() {
  const response = yield call(getTodos)
  yield put(setTodos(response))
}

export function* watchFetchTodosSaga() {
  yield takeEvery(FETCH_ASYNC_TODOS, fetchSaga)
}

export function* postSaga({ payload }) {
  const responseTodo = yield postTodo(payload)
  yield put(addTodo(responseTodo))
}

export function* watchPostTodoSaga() {
  yield takeEvery(POST_ASYNC_TODO, postSaga)
}

function* putSaga({ payload }) {
  const response = yield putTodo(payload)
  yield put(editTodo(response))
}

export function* watchEditTodoSaga() {
  yield takeEvery(PUT_ASYNC_TODO, putSaga)
}

function* deleteSaga({ payload }) {
  const id = payload
  const response = yield deleteTodo(id)
  yield put(removeTodo(id))
}

export function* watchDeleteTodoSaga() {
  yield takeEvery(DETELE_ASYNC_TODO, deleteSaga)
}
