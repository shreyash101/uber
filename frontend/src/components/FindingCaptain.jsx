import React from 'react'

const FindingCaptain = () => {
  return (
    <div>
        <h5 
            onClick={() => {
                props.setVehicleFound(false)
            }} 
            className='w-[94%] p-3 text-center absolute top-0 right-2'><i className="text-gray-300 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='text-center text-2xl font-semibold mb-5'>Finding your captain</h3>
        <div className='gap-2 flex flex-col justify-between items-center '>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
            <div className='w-full mt-5'>
                <div className='flex items-center gap-3 pb-4'>
                    <i className="text-lg ri-map-pin-user-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11A</h3>
                        <p className='text-sm text-gray-600'>Manapakkam, Mumbai, MH</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 pb-4'>
                    <i className="text-lg ri-map-pin-user-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11A</h3>
                        <p className='text-sm text-gray-600'>Manapakkam, Mumbai, MH</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 pb-4'>
                    <i className="ri-money-rupee-circle-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Rs 193.20</h3>
                        <p className='text-sm text-gray-600'>Pay via Cash</p>
                    </div>
                </div>
            </div>
        </div>       
           
    </div>
  )
}

export default FindingCaptain