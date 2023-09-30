import { createAction } from "@reduxjs/toolkit";

export const setUserLogin = createAction("store/setUserLogin", (email, token) => {
    return {
        payload: { email, token }
    }
});

export const setUserProfil = createAction("store/setUserProfil", (firstName, lastName) => {
    return {
        payload: { firstName, lastName }
    }
});

export const profilEdit = createAction("store/profilEdit");

export const clearStore = createAction("store/clearStore");