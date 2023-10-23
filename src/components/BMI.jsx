import React from 'react'

function BMI({weight,height}) {
  return (
        <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px] text-2xl font-bold" >
        <h2>Your BMI is </h2>
        <h2>{(weight*10000/(height*height)).toFixed(2)}</h2>
        </div>
  )
}

export default BMI