import { spawn } from 'redux-saga/effects'
import {
  watchFetchTodosSaga,
  watchPostTodoSaga,
  watchDeleteTodoSaga,
  watchEditTodoSaga
} from './todoSaga'

export function* rootSaga() {
  yield spawn(watchFetchTodosSaga)
  yield spawn(watchPostTodoSaga)
  yield spawn(watchEditTodoSaga)
  yield spawn(watchDeleteTodoSaga)
}
