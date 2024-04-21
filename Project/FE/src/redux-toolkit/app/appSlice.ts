import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux-toolkit'

interface AppState {
    showModal: boolean
}

const initialState: AppState = {
    showModal: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setShowModal: (state, action: PayloadAction<boolean>) => {
            console.log("PAY", action.payload);
            
            state.showModal = action.payload
        }
    },
})

export const { setShowModal } = appSlice.actions

export const showModalState = (state: RootState) => state.app.showModal

export default appSlice.reducer