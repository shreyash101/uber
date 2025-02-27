import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-[url(https://img.freepik.com/premium-photo/traffic-laws-burning-traffic-light-ai-generative_955712-4557.jpg)] pt-8 h-screen w-full flex justify-between flex-col'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>

            </div>
        </div>
    </div>
  )
}

export default Start