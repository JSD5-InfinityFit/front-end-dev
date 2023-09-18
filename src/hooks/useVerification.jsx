const useVerification = () => {
  const ACTIVITY_TYPES = ["run", "bicycle", "ride", "swim", "walk", "hike", "dance", "badminton", "yoga"];

  const handleActivitySubmit = (name, type, description, date, durationTime) => {
    /**
     * All form fields are validated on form submission(Name, Description, ActivityType:[run, bicycle, ride, swim, walk, hike], Duration, Date)
     * A meaningful error message is displayed when a form field is invalid
     */
    const errorMessage = "";
    if (typeof name != string){
      errorMessage.push('Activity Name is not a string');
      return errorMessage;
    }
    if (!name.length){
      errorMessage.push('Activity Name is empty');
      return errorMessage;
    } 
    if (typeof type != string) {
      errorMessage.push('Activity Type is not a string');
      throw Error('Activity Type is not a string');
    }
    if (!ACTIVITY_TYPES.includes(type)) {
      errorMessage.push('Activity Type is not valid');
      return errorMessage;
    }
    if (typeof description != string) {
      errorMessage.push('Activity Description is not a string');
      return errorMessage;
    } 
    if (!description.length) {
      errorMessage.push('Activity Description is empty');
      return errorMessage;
    }
    if (typeof date != Date) {
      errorMessage.push('Activity Date is not a Date');
      return errorMessage;
    }
    if (date > new Date()) {
      errorMessage.push('Activity Date is in the future');
      return errorMessage;
    }
    if (typeof durationTime != Number) {
      errorMessage.push('Activity Duration is not a valid number');
      return errorMessage;
    }
    if (!durationTime.length) {
      errorMessage.push('Activity Duration is empty');
      return errorMessage;
    }
    console.log('Activity Form Submission is valid');
    return true;
  }

  return { handleActivitySubmit }
}

export default useVerification
export { ACTIVITY_TYPES, handleActivitySubmit }