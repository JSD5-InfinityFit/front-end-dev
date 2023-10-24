import calculateMET from "./calculateMET";
/**
 * Calculates the number of calories burned during an activity.
 *
 * @param {string} activityType - The type of activity performed.
 * @param {number} weight - The weight of the person performing the activity.
 * @param {number} duration - The duration of the activity in minutes.
 * @returns {number} The number of calories burned during the activity.
 */
export default function calculateCalories(activityType, weight, duration) {
    const MET = calculateMET(activityType);
    return parseInt(MET * 3.5 * weight * duration / 200);
}