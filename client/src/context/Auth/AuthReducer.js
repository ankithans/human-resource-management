export default (state, action) => {
  switch (action.type) {
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
