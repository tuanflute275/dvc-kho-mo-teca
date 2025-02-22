import { createSlice } from "@reduxjs/toolkit";
import {
  decryptCustom,
  encryptCustom,
  isNullOrEmpty,
} from "~/utils/helper";

let userData;
const encryptedUser = localStorage.getItem("user");

if (isNullOrEmpty(encryptedUser)) {
  userData = {};
} else {
  try {
    const decryptedUser = decryptCustom(encryptedUser);
    userData = decryptedUser ? JSON.parse(decryptedUser) : {};
  } catch (error) {
    console.error("Lỗi giải mã user:", error);
    userData = {};
  }
}

const setUserData = (item) => {
  try {
    const dataHash = encryptCustom(JSON.stringify(item));
    localStorage.setItem("user", dataHash);
  } catch (error) {
    console.error("Lỗi mã hóa user:", error);
  }
};

const tokenData =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : {};

const setTokenData = (item) => {
  localStorage.setItem("token", JSON.stringify(item));
};

const clearDataLocalStorage = () => {
  localStorage.clear();
};

const initState = {
  user: userData,
};

const initToken = {
  token: tokenData,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      setUserData(state.user);
    },
    getUser: (state, action) => {
      return {
        ...state.user,
      };
    },
    reset: () => initState,
    //token
    setToken(state, action) {
      state.token = action.payload;
      console.log(state);
      setTokenData(state.token);
    },
    getToken: (state, action) => {
      return {
        ...state.token,
      };
    },
    clearData: (state, action) => {
      clearDataLocalStorage();
    },
    resetToken: () => initToken,
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
