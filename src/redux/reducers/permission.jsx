import { createSlice } from '@reduxjs/toolkit';
import { decryptCustom, encryptCustom, isNullOrEmpty } from '~/utils/helper';

const getPermissionData = () => {
    const encryptedPermissions = localStorage.getItem('permissions');
    if (isNullOrEmpty(encryptedPermissions)) {
        return {};
    }
    try {
        const decryptedPermissions = decryptCustom(encryptedPermissions);
        return decryptedPermissions ? JSON.parse(decryptedPermissions) : {};
    } catch (error) {
        console.error('Error decrypting permissions:', error);
        return {};
    }
};

const setPermissionData = (permissions) => {
    try {
        const dataHash = encryptCustom(JSON.stringify(permissions));
        localStorage.setItem('permissions', dataHash);
    } catch (error) {
        console.error('Error encrypting permissions:', error);
    }
};

const clearPermissionData = () => {
    localStorage.removeItem('permissions');
};

const initState = {
    permissions: getPermissionData(),
};

export const permissionSlice = createSlice({
    name: 'permission',
    initialState: initState,
    reducers: {
        setPermissions(state, action) {
            state.permissions = action.payload;
            setPermissionData(state.permissions);
        },
        getPermissions(state) {
            return state.permissions;
        },
        clearPermissions(state) {
            clearPermissionData();
            state.permissions = {};
        },
    },
});

export const { setPermissions, getPermissions, clearPermissions } = permissionSlice.actions;
export const selectPermissionData = (state) => state.permission;
export default permissionSlice.reducer;
