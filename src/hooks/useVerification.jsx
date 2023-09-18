const useVerification = () => {
  const ACTIVITY_TYPES = ["run", "bicycle", "ride", "swim", "walk", "hike"];

  const handleActivitySubmit = (name, type, description, date, durationTime) => {
    /**
     * All form fields are validated on form submission(Name, Description, ActivityType:[run, bicycle, ride, swim, walk, hike], Duration, Date)
     * A meaningful error message is displayed when a form field is invalid
     */
    if (typeof name != string){
      throw Error('Activity Name is not a string');
    }
    if (!name.length){
      throw Error('Activity Name is empty');
    } 
    if (typeof type != string) {
      throw Error('Activity Type is not a string');
    }
    if (!ACTIVITY_TYPES.includes(type)) {
      throw Error('Activity Type is not valid');
    }
    if (typeof description != string) {
      throw Error('Activity Description is not a string');
    } 
    if (!description.length) {
      throw Error('Activity Description is empty');
    }
    if (typeof date != Date) {
      throw Error('Activity Date is not a Date');
    }
    if (date > new Date()) {
      throw Error('Activity Date is in the future');
    }
    if (typeof durationTime != Number) {
      throw Error('Activity Duration is not a valid number');
    }
    if (!durationTime.length) {
      throw Error('Activity Duration is empty');
    }
    console.log('Activity Form Submission is valid');
    return true;
  }

  return { handleActivitySubmit }
}

export default useVerification