import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Cake Shop-{props.numOfCakes}</h1>
      {props.numOfCakes > 0 ? (
      <>
      <input type="text" value={number} onChange={e=> setNumber(e.target.value)}/>
      
      <button onClick={() =>props.buyCake(number) }>Buy {number} cake</button>
      </>
      ) : (
      <>
      <input type="text" value={number} onChange={e=> setNumber(0)}/> 
      <button onClick={() =>setNumber(0) }>Buy {number} cake</button>
      </>
      )}
    </div>
  )
}
//serve the central state
//return an object
const mapStateToProps = (state) =>{
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
//dispatch as parameter
//return an object
const mapDispatchToProps = (dispatch) =>{
  return{
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)