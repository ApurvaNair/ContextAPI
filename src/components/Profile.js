import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)

    if(!user) return <h2>Please Login</h2>
  return (
    <div>
    <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile