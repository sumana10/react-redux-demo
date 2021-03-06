import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { fetchUsers } from '../redux/users/userAction'
import { fetchUsers } from '../redux'
import { useSelector, useDispatch } from 'react-redux'


export default function UserContainer () {

  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
   
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.username}</p>)}
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     userData: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UserContainer)