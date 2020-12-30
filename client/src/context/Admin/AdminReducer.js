// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "EMPLOYEES_LOADING":
      return {
        ...state,
        loading: true,
        employees: [],
      };
    case "EMPLOYEES_LOADED":
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
