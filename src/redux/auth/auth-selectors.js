export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;

const authSelectors = { getIsLoggedIn, getUserName, getToken };

export default authSelectors;
