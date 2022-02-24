import { ADD_TODO } from '../../constant/actionTypes'

const initialState = {
  items: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state
    default:
      return state
  }
}

export default todoReducer
