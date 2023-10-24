function calculateMET(activityType) {
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

export default function calculateCalories(activityType, weight, duration) {
    const MET = calculateMET(activityType);
    return parseInt(Math.round((MET * 3.5 * weight * duration/200)));
}