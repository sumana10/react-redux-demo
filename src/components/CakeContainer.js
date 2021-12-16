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

const mapStateToProps = (state) =>{

  return {
    numOfCakes: state.numOfCakes
  }

}

const mapDispatchToProps = (dispatch) =>{
  return{
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)