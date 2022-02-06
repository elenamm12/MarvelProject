import React, { useState } from 'react';
import { Grid, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    menu: {
        position: 'absolute',
        backgroundColor: '#010101',
        color: 'rgba(255,255,255, 1)',
        height: '100vh',
        width: '100vw',
        fontFamily: 'Open Sans, arial, sans-serif',
        zIndex: '99',
        transition: 'all 2s linear',
        transform: 'translateY(59px)',
        display: 'none'
    },
    itemBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        letterSpacing: '2px',
        fontSize: '12px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'rgba(255,255,255, 0.8)',
        textDecoration: 'none',
        transition: '0.3s all',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#FBFBFB'
        }
    }
}));


const Menu = () => {

    const classes = useStyles();

    const pages = [
        'characters',
        'comics',
        'creators',
        'events',
        'stories',
    ]

    return (
        <Box display={{ xs: "flex", sm: "none" }}>
            <Box id="menuMe" className={classes.menu}>
                {pages.map((page, index) => (
                    <Box key={index} item sm={2} md={1.5} lg={1} xl={0.5} className={classes.itemBox}>
                        <a className={classes.item} href={`/galleria/${page}`}>
                            {page}
                        </a>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Menu;