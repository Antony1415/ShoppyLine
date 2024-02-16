import React from 'react'

interface TemplateProps {
    children?: React.ReactNode
}

const template = ({ children }: TemplateProps): React.JSX.Element => {
    return (
        <>
            {children}
        </>
    )
}

export default template