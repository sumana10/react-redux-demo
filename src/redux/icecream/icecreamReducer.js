import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numOfIceCreams: 20
}

const icecreamReducer =(state = initialState, action)=>{

  switch(action.type){

    case BUY_ICECREAM : return{
      ...state,
      numOfIceCreams: state.numOfIceCreams > 0 ? (state.numOfIceCreams - 1) : state.numOfIceCreams
    }
    default: return state;
  }

}

export default icecreamReducer