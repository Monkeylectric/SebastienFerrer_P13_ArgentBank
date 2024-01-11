import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    isLogged: false,
    userFirstName: null,
    userLastName: null,
    userEmail: null,
    isUserEdit: false,
    authToken: null,
}

export const userLogin = createAsyncThunk('store/userLogin', async ({email, password}) => {
    try {
        const response = await axios.post(`http://localhost:3001/api/v1/user/login`, {
            email,
            password
        });

        console.log(response);

        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        }
    } catch (error) {
        throw error;
    }
})

export const userProfile = createAsyncThunk('store/userProfile', async (token) => {
    try {
        const response = await axios.post(`http://localhost:3001/api/v1/user/profile`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
})

export const userUpdateProfile = createAsyncThunk('store/userUpdateProfile', async ({newFirstName, newLastName, token}) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/v1/user/profile`, {
            firstName: newFirstName,
            lastName: newLastName
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
})

export const storeSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {
        profilEdit: (state) => {
            state.isUserEdit = !state.isUserEdit;
        },
        clearStore: (state) => {
            state.isLogged = false;
            state.userFirstName = null;
            state.userLastName = null;
            state.userEmail = null;
            state.isUserEdit = false;
            state.authToken = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                const isLogged = true;
                const email = action.payload.email;
                const token = action.payload.body.token;

                if (isLogged) {
                    state.isLogged = isLogged;
                    state.userEmail = email;
                    state.authToken = token;
                }
            })
            .addCase(userLogin.rejected, (state, action) => {
                console.log(action.error);
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                const firstName = action.payload.body.firstName;
                const lastName = action.payload.body.lastName;

                state.userFirstName = firstName;
                state.userLastName = lastName;
            })
            .addCase(userProfile.rejected, (state, action) => {
                console.log(action.error);
            })
            .addCase(userUpdateProfile.fulfilled, (state, action) => {
                const firstName = action.payload.body.firstName;
                const lastName = action.payload.body.lastName;

                state.userFirstName = firstName;
                state.userLastName = lastName;
            })
            .addCase(userUpdateProfile.rejected, (state, action) => {
                console.log(action);
            })
    }
})

export const { profilEdit, clearStore } = storeSlice.actions;

export default storeSlice.reducer;