import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_STATUS,
  EDIT_TITLE,
  FETCH_ALL_TODOS
} from '../../constant/actionTypes'

import { v4 as uuidv4 } from 'uuid'

const initialState = {
  items: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        items: [
          ...state.items,
          { title: action.payload, id: uuidv4(), isCompleted: false }
        ]
      }
    }

    case REMOVE_TODO: {
      const newTodoItems = state.items.filter(
        (item) => item.id !== action.payload
      )
      return { ...state, items: newTodoItems }
    }

    case CHANGE_STATUS: {
      const index = state.items.findIndex((todo) => todo.id === action.payload)
      const copyTodoItems = [...state.items]
      copyTodoItems[index] = {
        ...copyTodoItems[index],
        isCompleted: !copyTodoItems[index].isCompleted
      }
      return { ...state, items: copyTodoItems }
    }

    case EDIT_TITLE: {
      const { id, newTitle } = action.payload
      const index = state.items.findIndex((todo) => todo.id === id)
      const copyTodoItems = [...state.items]
      copyTodoItems[index] = {
        ...copyTodoItems[index],
        title: newTitle
      }
      return { ...state, items: copyTodoItems }
    }

    case FETCH_ALL_TODOS:
      console.log(action.payload)
      return { ...state, items: action.payload }

    default:
      return state
  }
}

export default todoReducer
