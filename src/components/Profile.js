import React from 'react'
import profileimg from './img/profile.png';
import github from './img/github.png'
import slack from './img/slack.png'
function Profile() {
  return (
    <div className='font-inter'> 
    <div className='flex justify-center pt-8'>
        <img className="w-32 rounded-full items-center" src={profileimg} alt="logo"/>
    </div>
    
    <div className='grid items-center px-16 w-screen'>
        <div className='rounded-[10px] p-4 text-center w-[100%] my-3 bg-[#EAECF0]'>Twitter Link</div>
        <div className='rounded-[10px] p-4 text-center w-[100%] my-3 bg-[#EAECF0]'>Twitter Link</div>
        <div className='rounded-[10px] p-4 text-center w-[100%] my-3 bg-[#EAECF0]'>Twitter Link</div>
        <div className='rounded-[10px] p-4 text-center w-[100%] my-3 bg-[#EAECF0]'>Twitter Link</div>
        <div className='rounded-[10px] p-4 text-center w-[100%] my-3 bg-[#EAECF0]'>Twitter Link</div>
        <div className='rounded-[10px] p-4 text-center w-[100%] my-3 mb-10 bg-[#EAECF0]'>Twitter Link</div>
        
    </div> 

    
    <div className='flex space-x-6 justify-center'>
    <img src={slack}/>
    <img src={github}/>    
          
    </div>
    </div>

  )
}

export default Profile