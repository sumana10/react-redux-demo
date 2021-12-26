import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

export default function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  //accepts a function as it's parameter
  //returns by selector function
  const dispatch = useDispatch()
  // return a reference now it's ready to take action
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}
