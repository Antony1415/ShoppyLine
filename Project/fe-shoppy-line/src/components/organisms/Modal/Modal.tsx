"use client"
import { useAppDispatch, useAppSelector } from '@/redux-toolkit';
import { setShowModal, showModalState } from '@/redux-toolkit/modal/modalSlice';
import { handleClickOutsideComponent } from '@/utils/func';
import React, { useEffect, useRef, useState } from 'react'

export interface ModalProps {
    children?: React.ReactNode
    className?: string;
}

const Modal = ({ children, className }: ModalProps): React.JSX.Element | null => {
    const modalRef = useRef<HTMLDivElement>(null);
    const showModal = useAppSelector(showModalState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (showModal) {
            const cleanUpHandleClickOutside = handleClickOutsideComponent(modalRef, showModal, (val) => dispatch(setShowModal(val)))

            return () => cleanUpHandleClickOutside()
        }
    }, [showModal])

    if (!showModal) {
        return null;
    }

    return (
        <div className='fixed z-[999] h-full w-full bg-slate-800/40 flex items-center justify-center'>
            <div className={`${className} bg-white rounded-[5px] w-fit h-fit py-5 px-5`} ref={modalRef}>
                {children}
            </div>
        </div>
    )
}

export default Modal