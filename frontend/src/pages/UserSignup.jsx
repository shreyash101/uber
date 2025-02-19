import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname ] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            email: email, 
            password: password,
            fullName: {
                firstname: firstname,
                lastname: lastname
            }
        })
        setEmail('')
        setFirstname('')
        setLastname('')
        setPassword('')
    }
  return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-7' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form action="" onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-base font-medium'>What's your name</h3>
                    <div className='flex gap-4 mb-5'>
                        <input 
                            className='bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
                            placeholder='First name' 
                            type="text" 
                            name="" 
                            required
                            value={firstname}
                            onChange={(e) => {
                                setFirstname(e.target.value)
                            }}
                        />
                        <input 
                            className='bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
                            placeholder='Last name' 
                            type="text" 
                            name=""
                            value={lastname}
                            onChange={(e) => {
                                setLastname(e.target.value)
                            }}
                        />
                    </div>
                    <h3 className='text-base font-medium'>What's your email</h3>
                    <input 
                        className='bg-[#eee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base'
                        placeholder='Enter your email' 
                        type="email" 
                        name=""
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <h3 className='text-base font-medium'>Enter password</h3>
                    
                    <input 
                        className='bg-[#eee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base'
                        type="password" 
                        placeholder='Enter your password' 
                        required 
                        name="" 
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>

            </div>
            <div>
                <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
            </div>
        </div>
    </div>
  )
}

export default UserSignup