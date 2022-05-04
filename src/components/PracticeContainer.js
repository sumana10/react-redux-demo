import React from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../redux'



function PracticeContainer(props) {
  return (
    <div>
    <h1>Book shop - {props.numOfBooks}</h1>
    <button onClick={props.buyBook}>Buy Now</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    numOfBooks: state.practice.numOfBooks
  }
}

const mapDispatchToProps = (dispatch) =>{

  return{
    buyBook: () => dispatch(buyBook())
  }

}
export default connect(mapStateToProps,
  mapDispatchToProps)(PracticeContainer)