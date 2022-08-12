let initialState = [];

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
      return action.peyload;
    case "GET_SINGLE_COUNTRY":
      return action.peyload;
    case "EMPTY_LIST":
      return [];
    case "SEARCH":
      
      return action.peyload;
    default:
      return state;
  }
};
