import axios from 'axios'
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8080';

type registerUserProps = {
    firstName: string,
    lastName: string,
    username: string,
    about: string,
    languages: string[],
    email: string,
    password: string
}

type loginUserProps = {
    email: string,
    password: string
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ firstName, lastName, username, about, languages, email, password }:registerUserProps, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/users`,
                { firstName, lastName, username, about, languages, email, password },
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
                `${backendURL}/users/login`,
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