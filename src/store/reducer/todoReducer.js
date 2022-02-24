import { ADD_TODO } from '../../constant/actionTypes'

import { v4 as uuidv4 } from 'uuid'

const initialState = {
  items: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          { title: action.payload, id: uuidv4(), isCompleted: false }
        ]
      }
    default:
      return state
  }
}

export default todoReducer
