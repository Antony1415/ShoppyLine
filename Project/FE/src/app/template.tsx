'use client'
import React from 'react'
import { store, persistor } from '@/redux-toolkit'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
interface TemplateProps {
    children: React.JSX.Element
}

const template = ({ children }: TemplateProps): React.JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default template