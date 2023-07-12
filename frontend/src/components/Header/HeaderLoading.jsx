import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const HeaderLoading = ({ progressLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(progressLoading);
    }, [progressLoading]);

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
