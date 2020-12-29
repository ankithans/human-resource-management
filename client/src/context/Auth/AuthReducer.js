// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
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
    case "ADMIN_LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };
    default:
      return state;
  }
};
