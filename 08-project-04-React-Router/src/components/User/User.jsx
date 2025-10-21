import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userId} = useParams();
  return (
    <div className='text-center p-5 bg-purple-300'>id={userId}</div>
  )
}

export default User