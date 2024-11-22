import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from "../config/store.ts";
import {PersistGate} from "redux-persist/integration/react";

interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children
    } = props;


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
