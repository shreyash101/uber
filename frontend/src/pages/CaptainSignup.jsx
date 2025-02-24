import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname ] = useState('')
    const [lastname, setLastname] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const {captain, setCaptain} = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
            email: email, 
            password: password,
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if(response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setFirstname('')
        setLastname('')
        setPassword('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
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
                    <h3 className='text-base font-medium'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-5'>
                        <input 
                            className='bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
                            placeholder='Vehicle Color' 
                            type="text" 
                            name="" 
                            required
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value)
                            }}
                        />
                        <input 
                            className='bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
                            placeholder='Vehicle Plate' 
                            type="text" 
                            name=""
                            required
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex gap-4 mb-5'>
                        <input 
                            className='bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
                            placeholder='Vehicle Capacity' 
                            type="number" 
                            name="" 
                            required
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                        />
                        <select 
                            className='bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
                            required
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="motorcycle">Moto</option>
                        </select>
                    </div>
                    <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create account</button>
                </form>
                    <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>

            </div>
            <div>
                <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainSignup