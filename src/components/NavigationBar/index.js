import React, { useContext, useEffect } from 'react';
import { Grid, Container, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    navbar: {
        position: 'fixed',
        backgroundColor: 'transparent',
        color: 'rgba(255,255,255, 1)',
        height: '75px',
        width: '100vw',
        padding: '0px 75px 0px 75px',
        // fontFamily: 'Dosis, arial, sans-serif'
        fontFamily: 'Open Sans, arial, sans-serif',
        zIndex: '99',
        // transition: '0.3s all'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25px'
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
        color: 'rgba(255,255,255, 1)',

    }
}));


const NavigationBar = () => {

    const classes = useStyles();

    const pages = [
        { name: 'CHARACTERS', path: 'characters' },
        { name: 'COMICS', path: 'comics' },
        { name: 'CREATORS', path: 'creators' },
        { name: 'EVENTS', path: 'events' },
        { name: 'STORIES', path: 'stories' },
    ]

    const [red, green, blue] = [1, 1, 1]
    const navbar = document.querySelector('.makeStyles-navbar-1')

    window.addEventListener('scroll', () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 150
        y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
        const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
        navbar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })

    return (
        <Box display="flex" className={classes.navbar}>
            <Grid item md={6} lg={6} xl={9} className={classes.logo}>Home</Grid>
            {/* VALIDATION FOR SCREEN SIZE ==> BURGER OR TEXT BUTTONS */}
            {pages.map(page => (
                <Grid key={page.path} item sm={2} md={1.5} lg={1} xl={0.5} className={classes.itemBox}>
                    <button className={classes.item} onClick={() => console.log('AQUI')}>
                        {page.name}
                        </button>
                </Grid>
            ))}
        </Box>
    );
};

export default NavigationBar;
