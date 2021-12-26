import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

//argument is an object 

const rootReducer = combineReducers({

  cake: cakeReducer,
  icecream: icecreamReducer

})

export default rootReducer