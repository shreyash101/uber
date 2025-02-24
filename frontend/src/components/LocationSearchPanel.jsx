import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "24B, Near Kapoor's cafe, Sheryians Coding School, MH",
    "24B, Near Sharma's cafe, Arman Coding School, Bhopal"
  ]

  return (
    // <div>This is a sample data</div>
    <div className='flex flex-col gap-4'>
      {
        locations.map((location, index) => (
          <div onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} key={index} className='flex border-2 p-2 rounded-xl border-gray-100 active:border-black gap-4 items-center justify-start'>
            <h2 className='bg-[#eee] h-7 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
            <h4 className='font-medium'>{location}</h4>
          </div>
        ))
      }
      {/* <div className='flex border-2 p-2 rounded-xl border-gray-100 active:border-black gap-4 items-center justify-start'>
        <h2 className='bg-[#eee] h-7 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal</h4>
      </div>
      <div className='flex border-2 p-2 rounded-xl border-gray-100 active:border-black gap-4 items-center justify-start'>
        <h2 className='bg-[#eee] h-7 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal</h4>
      </div>
      <div className='flex border-2 p-2 rounded-xl border-gray-100 active:border-black gap-4 items-center justify-start'>
        <h2 className='bg-[#eee] h-7 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal</h4>
      </div> */}
    </div>
  )
}

export default LocationSearchPanel