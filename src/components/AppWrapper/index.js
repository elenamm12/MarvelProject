import React, { useContext, useEffect } from 'react';
import NavigationBar from '../NavigationBar'

const AppWrapper = ({ children }) => {

    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};

export default AppWrapper;
