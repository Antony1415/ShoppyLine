import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { appSlice, modalSlice } from '@/redux-toolkit';

const persistConfig = {
    key: 'app',
    storage,
}

const reducer = combineReducers({
    app: persistReducer(persistConfig, appSlice),
    modal: modalSlice
})

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch