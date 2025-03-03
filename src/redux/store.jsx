import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import permissionReducer from './reducers/permission';

export const store = configureStore({
    reducer: {
        user: userReducer,
        permission: permissionReducer,
    },
});
