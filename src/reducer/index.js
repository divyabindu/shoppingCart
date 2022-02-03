import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import cartReducer from './cartReducer';

export default combineReducers({
    homeReducer,
    cartReducer
})