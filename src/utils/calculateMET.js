/**
 * Calculates the Metabolic Equivalent for Task (MET) based on the activity type.
 *
 * @param {string} activityType - The type of activity.
 * @returns {number} The MET value for the given activity type.
 */
export default function calculateMET(activityType) {
    // Metabolic Equivalent for Task (MET)
    switch(activityType) {
        case 'run': return 10;
        case 'dance': return 6;
        case 'swim': return 4.5;
        case 'badminton': return 4.5;
        case 'yoga' : return 4.5;
        default: return 1;
    }
}