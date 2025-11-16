import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../images/signBG.jpg'

const OverView = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='bg-green-700/75 w-full h-screen'>
      <div className='w-full h-[80vh] bg-size-[100%_100%] bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
        {/* <button className='bg-red-600 md:w-40  text-white h-20 md:text-2xl font-semibold shadow-amber-800 shadow-lg  mt-15 p-3 rounded-3xl cursor-pointer border-2 border-white hover:-translate-y-0.5 transition-transform ease-in-out'
        onClick={handleClick}>
        Get Started
      </button> */}

        <div className="relative inline-block">
          {/* 1) Rotating gradient layer (behind everything) */}
          <div className="absolute -inset-1 rounded-3xl overflow-hidden pointer-events-none z-0">
            <div className="w-full h-full rounded-3xl bg-[conic-gradient(from_0deg,rgba(255,0,0,1),rgba(255,165,0,1),rgba(255,255,0,1),rgba(255,0,0,1))] animate-spin-slow">
            </div>
          </div>

          {/* 2) Mask in center to create a ring (same color as page / container) */}
          <div className="absolute inset-6 rounded-3xl bg-white z-10 pointer-events-none"></div>

          {/* 3) Actual button (static) */}
          <button
            onClick={handleClick}
            className="relative z-20 bg-red-600 w-40 h-20 md:text-2xl text-white font-semibold rounded-3xl shadow-lg border-2 border-white"
          >
            Get Started
          </button>
        </div>

      </div>

    </div>
  )
}

export default OverView
