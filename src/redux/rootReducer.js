import { combineReducers } from 'redux'

import orderReducer from './counter/orderReducer.js'

const rootReducer = combineReducers({
  orders: orderReducer,
})

export default rootReducer
