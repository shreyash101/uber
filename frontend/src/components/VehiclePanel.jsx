import React from 'react'

const VehiclePanel = (props) => {
  return (
    <>
        <h5 onClick={() => {
            props.setVehiclePanel(false)
        }} className='w-[94%] p-3 text-center absolute top-0 right-2'><i className="text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-center text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className=' mb-2 active:border-black active:border-2 rounded-xl flex p-2 items-center justify-between'>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
            <div className=' w-6/10'>
                <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p children='font-normal text-xs text-gray-600'>Affordable, compact ride</p>
            </div>
            <h2 className='text-base font-semibold'>Rs 192.3</h2>
        </div>
        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='active:border-2 mb-2 active:border-black rounded-xl flex p-2 items-center justify-between'>
            <img className='h-8' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='ml-2 w-6/10'>
                <h4 className='font-medium text-sm'>UberGo<span><i className="ri-user-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p children='font-normal text-xs text-gray-600'>Swift autos</p>
            </div>
            <h2 className='text-base font-semibold'>Rs 92.3</h2>
        </div>
        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='active:border-2 mb-2 active:border-black rounded-xl flex p-2 items-center justify-between'>
            <img className='h-8' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
            <div className='ml-2 w-6/10'>
                <h4 className='font-medium text-sm'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p children='font-normal text-xs text-gray-600'>Economical ride for 1</p>
            </div>
            <h2 className='text-base font-semibold'>Rs 52.3</h2>
        </div>
    </>
  )
}

export default VehiclePanel