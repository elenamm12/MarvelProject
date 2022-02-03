import React, { useState } from 'react';
import { Grid, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useNavigate, NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    navbar: {
        position: 'fixed',
        backgroundColor: 'transparent',
        color: 'rgba(255,255,255, 1)',
        height: '75px',
        width: '100vw',
        padding: '0px 75px 0px 75px',
        fontFamily: 'Open Sans, arial, sans-serif',
        zIndex: '99',
        transition: '0.3s all'
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
        color: 'rgba(255,255,255, 0.8)',
        textDecoration: 'none',
        transition: '0.3s all',
        '&:hover': {
            color: '#FBFBFB'
        }
    }
}));


const NavigationBar = () => {

    // let navigate = useNavigate();

    const classes = useStyles();
    const [top, setTop] = useState(false)

    const pages = [
        { name: 'CHARACTERS', path: 'characters' },
        { name: 'COMICS', path: 'comics' },
        { name: 'CREATORS', path: 'creators' },
        { name: 'EVENTS', path: 'events' },
        { name: 'STORIES', path: 'stories' },
    ]

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 66) {
            setTop(true)
        } else {
            setTop(false)
        }
    })

    const redirect = (pathname) => {
        // navigate(`/${pathname}`)
    }

    return (
        <Box display="flex" className={classes.navbar} style={{ backgroundColor: top ? '#010101' : 'transparent', height: top ? '60px' : '75px' }}>
            <Grid item md={6} lg={6} xl={9} className={classes.logo}>
                <a className={classes.item} href={`/`}>
                    HOME
                </a>
            </Grid>
            {/* VALIDATION FOR SCREEN SIZE ==> BURGER OR TEXT BUTTONS */}
            {pages.map(page => (
                <Grid key={page.path} item sm={2} md={1.5} lg={1} xl={0.5} className={classes.itemBox}>
                    <a className={classes.item} href={`/${page.path}`}>
                        {page.name}
                    </a>
                </Grid>
            ))}
        </Box>
    );
};

export default NavigationBar;
