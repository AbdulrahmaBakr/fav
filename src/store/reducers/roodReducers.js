import { combineReducers } from "redux";
import favouritesReducer from './favuoritesReducer'

   const rootReducer = combineReducers({
    favourites :favouritesReducer,


 })

 export default rootReducer;