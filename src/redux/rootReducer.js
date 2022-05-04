import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import practiceReducer from "./practice/practiceReducer";
import userReducer from './users/userReducer'


//argument is an object 

const rootReducer = combineReducers({

  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
  practice: practiceReducer

})

export default rootReducer