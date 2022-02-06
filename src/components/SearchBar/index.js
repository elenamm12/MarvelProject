import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import $ from 'jquery';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        height: '35px'
    },
    container: {
        width: '100%',
        height: '100%',
        transition: 'transform 0.5s',
    },
    bar: {
        backgroundColor: '#FBFBFB',
        borderRadius: '30px',
        height: '100%',
        width: '100%'
    },
    button: {
        width: '10%',
        height: '100%',
        padding: '0 5% 0 0',
        borderRadius: '0 30px 30px 0',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: '#891E15',
        '&:focus': {
            outline: 'none'
        },
        '&.MuiSvgIcon-root': {
            height: '100%'
        }
    },
    input: {
        width: '85%',
        height: '100%',
        border: 'none',
        padding: '0 0 0 5%',
        backgroundColor: 'transparent',
        transform: 'translateY(-6px)',
        '&:focus': {
            outline: 'none'
        },
    }
}));


const SearchBar = (props) => {

    const classes = useStyles();
    const [placeholder, setPlaceholder] = useState(props.placeholder)

    return (
        <Grid container justifyContent="center" className={classes.main} id="notMe">
            <Grid item className={classes.container} xs={10} sm={8} md={6} lg={6}>
                <Grid className={classes.bar}>
                    <input id="inputMe" value={props.keyword} className={classes.input} placeholder={placeholder} onChange={props.onChange} />
                    <button id="buttonMe" className={classes.button}>
                        <SearchIcon />
                    </button>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default SearchBar;