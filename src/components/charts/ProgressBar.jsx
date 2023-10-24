import React from 'react'

const ProgressBar = () => {

  return (
    <div className='flex flex-col bg-white border-2 border-red-400 w-[250px] h-[250px] m-10 rounded-[13px] justify-center items-center'>
        <progress className="w-56 mt-4 progress-success" value={0} max="100"></progress>
        <progress className="w-56 mt-4 progress-primary" value="10" max="100"></progress>
        <progress className="w-56 mt-4 progress-secondary" value="40" max="100"></progress>
        <progress className="w-56 mt-4 progress-accent" value="70" max="100"></progress>
        <progress className="w-56 mt-4 progress-info" value="100" max="100"></progress>
    </div>
  )
}

export default ProgressBar