import { BUY_BOOK } from "./practiceTypes";

const initialState = {
  numOfBooks: 50
}

const practiceReducer = (state = initialState, action) =>{

  switch(action.type){

    case BUY_BOOK: return{
      ...state,
      numOfBooks: state.numOfBooks - 1
    }
    default: return state
  }

}

export default practiceReducer