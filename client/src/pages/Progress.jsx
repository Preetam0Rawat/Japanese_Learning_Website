import React from 'react'
import bgImage from '../images/signBG.jpg'
import { useNavigate } from 'react-router-dom'
const Progress = () => {

 const navigate = useNavigate()
  const token = localStorage.getItem("token")
  
  const handleClick = () =>{
    navigate('/')
  }
  return (
    !token ? (
      <>
        <div className=' absolute -z-1 h-screen w-full bg-cover bg-center bg-no-repeat blur-md' style={{ backgroundImage: `url(${bgImage})` }}>
        </div>
        <div className='flex justify-center items-center h-screen'>
          <div className=' bg-white/50  border-2 border-white rounded-4xl p-5 text-center flex flex-col  items-center m-5'>
            <h1 className='md:text-4xl text-2xl md:mt-20 text-white'>Please sign in to start tracking your progress   </h1>   
            <button className='bg-red-600 md:w-40  text-white  md:text-2xl font-semibold shadow-amber-800 shadow-lg  mt-15 p-3 rounded-3xl cursor-pointer border-2 border-white hover:-translate-y-0.5 transition-transform ease-in-out'
                    onClick={handleClick}>
                      Go Home
            </button>
          </div>
        </div>
      </>)
      :
      (
        <div>Progress Page</div>
      )
  )
}

export default Progress
