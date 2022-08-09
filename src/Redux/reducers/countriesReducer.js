let initialState = [];

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
        console.log('run')
      return action.peyload;
    default:
      return state;
  }
};
