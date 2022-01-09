import React, { useContext, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core'
import shield from '../../assets/images/shield.jpeg'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    main: {
        height: '10px',
        width: '100vw',
        backgroundColor: '#891E15',
        // position: 'fixed',
    },
}));

const Divider = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.main}>
        </Grid>
    );
};

export default Divider;