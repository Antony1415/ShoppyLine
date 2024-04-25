import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux-toolkit'

interface AppState {
    showApp: boolean
}

const initialState: AppState = {
    showApp: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setShowApp: (state, action: PayloadAction<boolean>) => {
            state.showApp = action.payload
        }
    },
})

export const { setShowApp } = appSlice.actions

export const showAppState = (state: RootState) => state.app.showApp

export default appSlice.reducer