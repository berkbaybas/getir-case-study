import { all, fork } from 'redux-saga/effects'
import {
  watchFetchTodosSaga,
  watchPostTodoSaga,
  watchDeleteTodoSaga,
  watchEditTodoSaga
} from './todoSaga'

export function* rootSaga() {
  yield all([
    fork(watchFetchTodosSaga),
    fork(watchPostTodoSaga),
    fork(watchEditTodoSaga),
    fork(watchDeleteTodoSaga)
  ])
}
