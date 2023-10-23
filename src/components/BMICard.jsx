import React from 'react'
import calculateBMI from '../utils/bmi.js'

function BMICard({weight,height}) {
  const userBMI = calculateBMI(weight, height);
  return (
        <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px] text-2xl font-bold" >
        <h2>Your BMI is </h2>
        <h2>{userBMI}</h2>
        </div>
  )
}

export default BMICard