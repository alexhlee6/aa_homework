import actions from './actions';
const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (oldState = initialState, action) => {
  // return state; // remove this and fill out the body of the reducer function
  switch (action.type) {
    case "SWITCH_LOCATION":
      const newState = {city: action.city, jobs: action.jobs};
      let state = Object.assign({}, oldState, newState);
      return state;
    default:
      return oldState;
  }
};
// window.reducer = reducer;
export default reducer;
