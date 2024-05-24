import React from 'react'

export interface AdminLayoutProps {
    children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps): React.JSX.Element => {
    return (
        <div>
            ADMIN
            {children}
        </div>
    )
}

export default AdminLayout