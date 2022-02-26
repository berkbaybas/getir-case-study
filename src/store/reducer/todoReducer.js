import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODOS,
  EDIT_TODO
} from '../../constant/actionTypes'

const initialState = {
  items: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, items: action.payload }

    case ADD_TODO:
      const newTodoItem = action.payload

      return {
        ...state,
        items: [...state.items, newTodoItem]
      }

    case EDIT_TODO:
      const newTodo = action.payload
      const index = state.items.findIndex((todo) => todo.id === newTodo.id)

      const copyTodoItems = [...state.items]
      copyTodoItems[index] = {
        ...newTodo
      }
      console.log(copyTodoItems)
      return { ...state, items: copyTodoItems }

    case REMOVE_TODO:
      const newTodoItems = state.items.filter(
        (item) => item.id !== action.payload
      )

      return { ...state, items: newTodoItems }

    default:
      return state
  }
}

export default todoReducer
