import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

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
        borderRadius: '0 30px 30px 0',
        color: '#891E15',
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
        transform: 'translateY(-13px)',
        '&:focus': {
            outline: 'none'
        },
    }
}));


const SearchBar = (props) => {

    const classes = useStyles();
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [keyword, setKeyword] = useState(props.keyword)

    return (
        <Grid container justifyContent="center" className={classes.main}>
            <Grid item className={classes.container} xs={10} sm={8} md={6} lg={6}>
                <Grid className={classes.bar}>
                    <input value={props.keyword} className={classes.input} placeholder={placeholder} onChange={props.onChange} />
                    <SearchIcon className={classes.button} />
                </Grid>
            </Grid>
        </Grid>

    );
};

export default SearchBar;