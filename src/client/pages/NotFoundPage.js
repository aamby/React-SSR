import React from 'react';

const NotFoundPage =({ staticContext = {}}) =>{
    staticContext.notFound = true;
    return (
        <div className="center-align" style={{marginTop:'200px'}}>
            <h3>Page not found</h3>
        </div>
    );
};

export default {
    component: NotFoundPage
};