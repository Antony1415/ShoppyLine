import { configureStore } from '@reduxjs/toolkit'
import appSlice from './app/appSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'app',
    storage,
}

const persistedAppSlice = persistReducer(persistConfig, appSlice)

export const store = configureStore({
    reducer: {
        app: persistedAppSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch