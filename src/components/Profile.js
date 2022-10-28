import React from 'react'
import profileimg from './img/profile.png';
function Profile() {
  return (
    <div className='flex justify-center pt-8'>
        <img className="w-32 rounded-full items-center" src={profileimg} alt="logo"/>
    </div>
  )
}

export default Profile