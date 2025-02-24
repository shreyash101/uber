import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {captain, setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const captain = {
            email: email, 
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

        if(response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')  
        }
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-7' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form action="" onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium'>What's your email</h3>
                <input 
                    className='bg-[#eee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    placeholder='Enter your email' 
                    type="email" 
                    name=""
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className='text-lg font-medium'>Enter password</h3>
                
                <input 
                    className='bg-[#eee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='Enter your password' 
                    required 
                    name="" 
                />
                <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                <p className='text-center'>Want to join uber? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </form>
        </div>
        <div>
            <Link
                to='/login'
                className='bg-[#bd43e6] text-[#fff] flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin