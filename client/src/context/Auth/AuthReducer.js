// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    // case "APP_STARTING":
    //   return {
    //     ...state,
    //     isLoggedIn: action.payload.isLoggedIn,
    //   };
    case "ADMIN_LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADMIN_LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    default:
      return state;
  }
};
