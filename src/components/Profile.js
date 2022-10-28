import React from 'react'
import profileimg from './img/profile.png';
function Profile() {
  return (
    <div> 
    <div className='flex justify-center pt-8'>
        <img className="w-32 rounded-full items-center" src={profileimg} alt="logo"/>
        <svg  className="rounded-full border p-2 absolute md:hidden xl:hidden ml-[40%]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
    </div>
    
    <div className='grid grid-flow-row justify-center auto-rows-max'>
        <div className='rounded-[30px] text-center w-96 my-6 bg-[#EAECF0]'>1</div>
        <div className='rounded-[30px] text-center w-96 my-6 bg-[#EAECF0]'>1</div>
        <div className='rounded-[30px] text-center w-96 my-6 bg-[#EAECF0]'>1</div>
        <div className='rounded-[30px] text-center w-96 my-6 bg-[#EAECF0]'>1</div>
        <div className='rounded-[30px] text-center w-96 my-6 bg-[#EAECF0]'>1</div>
        <div className='rounded-[30px] text-center w-96 my-6 bg-[#EAECF0]'>1</div>
    </div> 
    </div>
  )
}

export default Profile