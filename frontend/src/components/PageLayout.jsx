import React, { useEffect } from 'react';
import HeaderBelt from './Header/HeaderBelt';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const PageLayout = () => {
    return (
        <>
            <HeaderBelt />
            <Outlet />
            <Footer />
        </>
    )
}

export default PageLayout;
