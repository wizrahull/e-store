export function login(state, action) {
  const { access_token } = action.payload || {};
  state = {
    ...state,
    isLoggedIn: true,
    user: null,
    authToken: access_token || null,
  };
  return state;
}

export function logout(state, action) {
  if (action.type === "Auth/userLogout") {
    localStorage.clear();

    state = {
      ...state,
      isLoggedIn: false,
      user: null,
      authToken: null,
    };
    return state;
  }
}
