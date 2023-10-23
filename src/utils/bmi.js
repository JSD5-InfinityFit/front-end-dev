/**
 * This function used to calculate the BMI of the user
 * @param {number} weight in kg
 * @param {number} height in cm
 * @returns 
 */
export default function calculateBMI(weight, height) {
  return (weight * 10000/ (height * height)).toFixed(2);
}