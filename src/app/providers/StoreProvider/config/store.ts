import { configureStore } from '@reduxjs/toolkit';
import {userReducer, authReducer, projectReducer} from "../../../../entities";
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    project: projectReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false
        }),
})
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

