// actions.js

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setLoading = (isLoading) => ({
  type: "SET_LOADING",
  payload: isLoading,
});
