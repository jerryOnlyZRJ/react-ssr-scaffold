import React from 'react';

const LoadingPage = <div>页面加载中...</div>;

const ErrorPage = <div>页面加载出错！</div>;

export default React.memo(({ isLoading, error }) => {
    if (isLoading) {
        return LoadingPage;
    } else if (error) {
        console.error(error);
        return ErrorPage;
    } else {
        return null;
    }
});