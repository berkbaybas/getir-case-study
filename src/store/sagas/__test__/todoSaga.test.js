import { put, call } from 'redux-saga/effects'
import { getTodos } from '../../../service/todoService'
import { fetchSaga } from '../todoSaga'
import db from '../../../utils/db.json'
import { setTodos } from '../../actions/todoAction'

it('success fetch todos', () => {
  const generator = fetchSaga()
  const response = db

  expect(generator.next().value).toEqual(call(getTodos))

  expect(generator.next(response).value).toEqual(put(setTodos(response)))

  expect(generator.next()).toEqual({ done: true, value: undefined })
})
