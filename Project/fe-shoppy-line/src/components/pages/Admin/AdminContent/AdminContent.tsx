import React from 'react'
import { AdminAccountContent, AdminBannerContent, AdminProductContent, AdminSearchEngineContent } from '@/components/pages';

export interface AdminContentProps {
    menu?: string;
}

const AdminContent = ({ menu }: AdminContentProps): React.JSX.Element => {
    const renderContent = () => {
        switch (menu) {
            case "product":
                return <AdminProductContent />;

            case "banner":
                return <AdminBannerContent />;

            case "search_engine":
                return <AdminSearchEngineContent />;

            default:
                return <AdminAccountContent />;
        }
    }

    return renderContent();
}

export default AdminContent