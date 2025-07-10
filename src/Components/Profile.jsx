import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'



const Profile = () => {
    const {user} = useContext(UserContext)
  if (!user) return <div className='text-center font-bold text-2xl text-red-500'>Please Login First</div>


  return <div className='text-center font-bold text-2xl text-green-500 mt-4 ml-25'>Welcome To The Site {user.username}💫😊</div>
}

export default Profile