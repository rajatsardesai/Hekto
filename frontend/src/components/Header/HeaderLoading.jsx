import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useSelector } from 'react-redux';

const HeaderLoading = () => {
    const [progress, setProgress] = useState(0);

    // To show loader
    const { productLoading } = useSelector(
        (state) => state.products
    );
    const { productDetailsLoading } = useSelector(
        (state) => state.productDetails
    );
    const { loginLoading, registerLoading, loadUserLoading, logoutLoading } = useSelector(
        (state) => state.user
    );
    const { updateProfileLoading, updatePasswordLoading } = useSelector(
        (state) => state.profile
    );
    const { forgotPasswordLoading, resetPasswordLoading } = useSelector(
        (state) => state.forgotPassword
    );

    useEffect(() => {
        setProgress(productLoading || productDetailsLoading || loginLoading || registerLoading || loadUserLoading || logoutLoading || updateProfileLoading || updatePasswordLoading || forgotPasswordLoading || resetPasswordLoading);
    }, [productLoading, productDetailsLoading, loginLoading, registerLoading, loadUserLoading, logoutLoading, updateProfileLoading, updatePasswordLoading, forgotPasswordLoading, resetPasswordLoading]);

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)} />
        </>
    )
}

export default HeaderLoading;
