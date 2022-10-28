import React from 'react'
import profileimg from './img/profile.png';
function Profile() {
  return (
    <div className='font-inter'> 
    <div className='flex justify-center pt-8'>
        <img className="w-32 rounded-full items-center" src={profileimg} alt="logo"/>
    </div>
    
    <div className='grid grid-flow-row justify-center auto-rows-max'>
        <div className='rounded-[30px] p-4 text-center w-96 my-6 bg-[#EAECF0]'>Twitter Link</div>
        <div className='rounded-[30px] p-4 text-center w-96 my-6 bg-[#EAECF0]'>Zuri Team</div>
        <div className='rounded-[30px] p-4 text-center w-96 my-6 bg-[#EAECF0]'>Zuri Books</div>
        <div className='rounded-[30px] p-4 text-center w-96 my-6 bg-[#EAECF0]'>Python Books</div>
        <div className='rounded-[30px] p-4 text-center w-96 my-6 bg-[#EAECF0]'>Background Check for Coders</div>
        <div className='rounded-[30px] p-4 text-center w-96 my-6 bg-[#EAECF0]'>Design Books</div>
    </div> 

    
    <div className='flex space-x-6 justify-center'>
        <svg className='border'></svg>
        <svg className='border'></svg>
    </div>
    </div>

  )
}

export default Profile