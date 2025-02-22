import { createSlice } from "@reduxjs/toolkit";
import { decryptCustom, encryptCustom, isNullOrEmpty } from "~/utils/helper";

const getUserData = () => {
  const encryptedUser = localStorage.getItem("user");
  if (isNullOrEmpty(encryptedUser)) {
    return {};
  }
  try {
    const decryptedUser = decryptCustom(encryptedUser);
    return decryptedUser ? JSON.parse(decryptedUser) : {};
  } catch (error) {
    console.error("Lỗi giải mã user:", error);
    return {};
  }
};

const setUserData = (item) => {
  try {
    const dataHash = encryptCustom(JSON.stringify(item));
    localStorage.setItem("user", dataHash);
  } catch (error) {
    console.error("Lỗi mã hóa user:", error);
  }
};

const getTokenData = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : {};
};

const setTokenData = (item) => {
  localStorage.setItem("token", JSON.stringify(item));
};

const clearDataLocalStorage = () => {
  localStorage.clear();
};

const initState = {
  user: getUserData(),
  token: getTokenData(),
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      setUserData(state.user);
    },
    getUser(state) {
      return state.user;
    },
    reset(state) {
      state.user = {};
      setUserData(state.user);
    },
    setToken(state, action) {
      state.token = action.payload;
      setTokenData(state.token);
    },
    getToken(state) {
      return state.token;
    },
    clearData(state) {
      clearDataLocalStorage();
      state.user = {};
      state.token = {};
    },
    resetToken(state) {
      state.token = {};
      setTokenData(state.token);
    },
  },
});

export const {
  setUser,
  getUser,
  reset,
  setToken,
  getToken,
  clearData,
  resetToken,
} = userSlice.actions;
export const selectUserData = (state) => state.user;
export default userSlice.reducer;
