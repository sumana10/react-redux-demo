import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import userReducer from './users/userReducer'

//argument is an object 

const rootReducer = combineReducers({

  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer

})

export default rootReducer