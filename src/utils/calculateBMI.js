/**
 * This function used to calculate the BMI of the user
 * @param {number} weight in kg
 * @param {number} height in cm
 * @returns {number} BMI
 */
export default function calculateBMI(weight, height) {
    return parseInt(Math.round(weight * 10000/ (height * height))) || 0;
}