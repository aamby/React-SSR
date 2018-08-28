import React from 'react';

const Home =() =>{
    return (
        <div className="center-align" style={{marginTop:'200px'}}>
            <h3>I'm the home component...</h3>
            <button onClick={()=>console.log("Hi there!")}>Click me!</button>
        </div>
    );
};

export default {
    component: Home
};