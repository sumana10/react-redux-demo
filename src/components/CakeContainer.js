import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


const CakeContainer = (props) => {
  return (
    <div>
      <h1>Cake Shop-{props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Now</button>
    </div>
  )
}
//serve the central state
//return an object
//get the data from store to render into component here state.cake.numOfCakes fetch data from central store and render by numOfCakes ...
const mapStateToProps = (state) =>{
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
//dispatch as parameter
//return an object
//get dispatch method as parameter and allows us maps action creator to props our component
const mapDispatchToProps = (dispatch) =>{
  return{
    buyCake: () => dispatch(buyCake())
  }
}

//connects react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)