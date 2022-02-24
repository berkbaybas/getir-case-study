import { put } from 'redux-saga/effects'

import { getTodos } from '../../service/todoService'
import { FETCH_ALL_TODOS } from '../../constant/actionTypes'

export function* fetchSaga() {
  const response = yield getTodos()
  yield put({ type: FETCH_ALL_TODOS, payload: response })
}
