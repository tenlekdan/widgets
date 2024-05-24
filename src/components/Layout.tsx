
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const Layout = () => {
    return (
        <>
            <h1>Widgets</h1>
            <SideNav />
            <Outlet></Outlet>
        </>
    )
}

export default Layout;