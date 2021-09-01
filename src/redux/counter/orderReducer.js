import { ADD_ORDER, REMOVE_ORDER } from './counterTypes.js'

const INITIAL_STATE = {
  orders: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        orders: [...state.orders, action.payload],
      }

    case REMOVE_ORDER:
      return {
        orders: state.orders.filter((order) => order !== action.payload),
      }

    default:
      return state
  }
}

export default reducer
