function calculateMET(activityType) {
    // Metabolic Equivalent for Task (MET)
    let MET = 0;
    switch(activityType) {
        case 'run':
        MET = 8;
        break;
        case 'cycle':
        MET = 6;
        break;
        case 'swim':
        MET = 4;
        break;
        case 'walk':
        MET = 2;
        break;
        case 'yoga':
        MET = 2;
        break;
        case 'dance':
        MET = 2;
        break;
        case 'hike':
        MET = 2;
        break;
        case 'badminton':
        MET = 2;
        break;
        default:
        MET = 0;
    }
}

export default function calculateCalories(activityType, weight, duration) {
    let calories = 0;
    let MET = calculateMET(activityType);
    calories = (MET * weight * duration);
    return calories.toFixed(2);
}