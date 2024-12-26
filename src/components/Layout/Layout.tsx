import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container mx-auto mb-4 px-1 md:px-3 lg:px-8">
            <Outlet />
        </div>
    )
}

export default Layout