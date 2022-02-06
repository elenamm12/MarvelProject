import React, { useState } from 'react';
import { Grid, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Menu from '../Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@material-ui/core';
import $ from 'jquery';

const useStyles = makeStyles(theme => ({
    navbar: {
        position: 'fixed',
        backgroundColor: 'transparent',
        color: 'rgba(255,255,255, 1)',
        height: '70px',
        width: '100vw',
        fontFamily: 'Open Sans, arial, sans-serif',
        zIndex: '98',
        transition: '0.3s all',
        padding: '0 5% 0 0',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25px',
        padding: '0 0 0 5%',
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


const NavigationBar = () => {

    const classes = useStyles();
    const [top, setTop] = useState(false)
    const [open, setOpen] = useState(false)

    const pages = [
        'characters',
        'comics',
        'creators',
        'events',
        'stories',
    ]

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 66) {
            setTop(true)
        } else {
            setTop(false)
        }
    })

    $("#buttonOpen").unbind().click(function () {
        $('#menuMe').hide();
    });

    $("#buttonClose").unbind().click(function () {
        $('#menuMe').show();
    });

    return (
        <Box display="flex" className={classes.navbar} style={{ backgroundColor: top ? '#010101' : 'transparent', height: top ? '60px' : '75px' }}>
            <Menu/>
            <Grid item xs={10} md={6} lg={6} xl={9} className={classes.logo}>
                <a className={classes.item} href={`/`}>
                    HOME
                </a>
            </Grid>
            {/* VALIDATION FOR SCREEN SIZE ==> BURGER OR TEXT BUTTONS */}
            {pages.map((page, index) => (
                <Grid key={index} display={{ xs: "none", sm: "flex" }} item sm={2} md={1.5} lg={1} xl={0.5} className={classes.itemBox}>
                    <a className={classes.item} href={`/galleria/${page}`}>
                        {page}
                    </a>
                </Grid>
            ))}
            <Grid item xs={2} display={{ xs: "flex", sm: "none" }}>
                {open ?
                    <IconButton id="buttonClose" onClick={() => setOpen(false)} color="secondary" aria-label="upload picture" component="span">
                        <CloseIcon />
                    </IconButton>
                    :
                    <IconButton id="buttonOpen" onClick={() => setOpen(true)} color="secondary" aria-label="upload picture" component="span">
                        <MenuIcon />
                    </IconButton>
                }
            </Grid>
        </Box>
    );
};

export default NavigationBar;
