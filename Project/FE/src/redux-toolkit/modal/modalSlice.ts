import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux-toolkit'

interface ModalState {
    showModal: boolean
}

const initialState: ModalState = {
    showModal: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setShowModal: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload
        }
    },
})

export const { setShowModal } = modalSlice.actions

export const showModalState = (state: RootState) => state.modal.showModal

export default modalSlice.reducer