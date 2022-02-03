import React, { useContext, useEffect } from 'react';
import NavigationBar from '../NavigationBar'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    main: {
        transition: 'transform 1.5s',
    },
}));

const AppWrapper = ({ children }) => {

    const classes = useStyles();

    return (
        <div className={classes.main}>
            <NavigationBar />
            {children}
        </div>
    );
};

export default AppWrapper;
