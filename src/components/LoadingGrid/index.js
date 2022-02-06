import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Divider from '../../components/Divider';
import loader from '../../assets/images/loader.gif';

const useStyles = makeStyles(theme => ({
    main: {
        height: '60vh'
    },
    loader: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FBFBFB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: '80px'
    }
}));


const LoadingGrid = ({ loading, Component }) => {

    const classes = useStyles();

    let date = new Date()

    return (
        <div className={classes.main}>
            <Divider />
            {!loading ?
                <div>{Component}</div>
                :
                <Grid className={classes.loader}>
                    <img src={loader} className={classes.img}></img>
                </Grid>
            }
        </div>
    );
};

export default LoadingGrid;