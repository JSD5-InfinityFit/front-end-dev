export default function calculateCalories(activityType, duration) {
    let calories = 0;
    switch(activityType) {
        case 'run':
        calories = 0.0175 * duration;
        break;
        case 'cycle':
        calories = 0.012 * duration;
        break;
        case 'swim':
        calories = 0.024 * duration;
        break;
        case 'walk':
        calories = 0.008 * duration;
        break;
        case 'yoga':
        calories = 0.004 * duration;
        break;
        case 'dance':
        calories = 0.008 * duration;
        break;
        case 'hike':
        calories = 0.012 * duration;
        break;
        case 'badminton':
        calories = 0.008 * duration;
        break;
        default:
        calories = 0;
    }
    return calories.toFixed(2);
}