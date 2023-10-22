import React from 'react'

const RadialProgress = () => {
  return (
    <div className='flex flex-col bg-white border-2 border-red-400 w-[250px] h-[250px] m-10 rounded-[13px] justify-center items-center'>
        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>
        {/* <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div> */}
    </div>
  )
}

export default RadialProgress