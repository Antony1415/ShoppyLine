import React from 'react'

interface TemplateProps {
    children: React.JSX.Element
}

const template = ({ children }: TemplateProps): React.JSX.Element => {
    return children
}

export default template