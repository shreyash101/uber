import React, {useState, useRef} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import FindingCaptain from '../components/FindingCaptain'
import WaitForCaptain from '../components/WaitForCaptain'

const Home = () => {

    const [pickupLocation, setPickupLocation] = React.useState('')
    const [destination, setDestination] = React.useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitForCaptainRef = useRef(null)

    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitForCaptain, setWaitForCaptain] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    useGSAP(() => {
        if(panelOpen) {
                gsap.to(panelRef.current, { 
                height: '70%',
                padding: 20,
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0,
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function() {
        if(vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])

    useGSAP(function() {
        if(confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    useGSAP(function() {
        if(vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])

    useGSAP(function() {
        if(waitForCaptain) {
            gsap.to(waitForCaptainRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitForCaptainRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitForCaptain])

  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div onClick={() => {
            setVehiclePanel(false)
        }} className='h-full w-screen'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='flex flex-col justify-end h-full absolute top-0 w-full'>
            
            <div className='h-[30%] p-5 bg-white relative'>
                <h5 onClick={() => setPanelOpen(!panelOpen)} className={`absolute top-7 right-6 ${!panelOpen ? "transform rotate-180" : ""}`}>
                    <i className="ri-arrow-down-wide-line"></i>
                </h5>
                <h4 className='text-2xl font-semibold'>Find a trip</h4>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <div className="line absolute h-15 w-0.5 top-[48%] left-10 bg-gray-800 rounded-full"></div>
                    <input 
                    onClick={() => {
                        setPanelOpen(true)
                    }}
                    onChange={(e) => {
                        setPickupLocation(e.target.value)
                    }} value={pickupLocation} className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pickup location'/>
                    <input
                    onClick={() => {
                        setPanelOpen(true)
                    }}
                    onChange={(e) => {
                        setDestination(e.target.value)
                    }} value={destination}
                    className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
                </form>
            </div>
            <div ref={panelRef} className='bg-white'>
                <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
            </div>
        </div>
        <div ref={vehiclePanelRef} className='translate-y-full fixed w-full z-10 bottom-0 px-3 py-8 pt-12 bg-white'>
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
        <div ref={confirmRidePanelRef} className='translate-y-full fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
            <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={vehicleFoundRef} className='translate-y-full fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
            <FindingCaptain setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={waitForCaptain} className=' fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
            <WaitForCaptain waitForCaptain={setWaitForCaptain}/>
        </div>
    </div>
  )
}

export default Home