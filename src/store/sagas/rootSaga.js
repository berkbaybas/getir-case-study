import { spawn } from 'redux-saga/effects'
import { fetchSaga } from './todoSaga'

export function* rootSaga() {
  yield spawn(fetchSaga)
}
