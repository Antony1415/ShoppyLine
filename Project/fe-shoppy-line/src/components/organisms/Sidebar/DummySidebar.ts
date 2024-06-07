export type AdminMenuType = {
    id: string,
    label: string,
    src: string
}

export const adminMenu: AdminMenuType[] = [
    {id: "product", label: "Product", src: "/assets/png/product_sidebar.png"},
    {id: "banner", label: "Banner", src: "/assets/png/banner_sidebar.png"},
    {id: "search_engine", label: "Search Engine", src: "/assets/png/search_engine_sidebar.png"},
    {id: "account", label: "Account", src: "/assets/png/account_sidebar.png"},
]