import axios from 'axios'
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://127.0.0.1:5000'

type registerUserProps = {
    firstName: string,
    email: string,
    password: string
}

type loginUserProps = {
    firstName: string,
    email: string,
    password: string
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ firstName, email, password }:registerUserProps, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/api/user/register`,
                { firstName, email, password },
                config
            )
        } catch (error: unknown) {
            // return custom error message from backend if present
            if (error instanceof AxiosError) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue(error.message)
                }
            }
        }
    }
)

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }: loginUserProps, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}/api/user/login`,
                { email, password },
                config
            )
            // store user's token in local storage
            localStorage.setItem('userToken', data.userToken)
            return data
        } catch (error: unknown) {
            // return custom error message from API if any

            if (error instanceof AxiosError) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue(error.message)
                }
            }
        }
    }
)