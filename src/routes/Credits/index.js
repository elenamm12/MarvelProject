import React, { useContext, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core'
import shield from '../../assets/images/shield.jpeg'
import hammer from '../../assets/images/thor-hammer.png'
import { makeStyles } from '@mui/styles';
import Divider from '../../components/Divider';

const useStyles = makeStyles(theme => ({
    main: {
        height: '99vh',
        width: '100vw',
        backgroundColor: '#010101',
        backgroundImage: `url(${shield})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50% auto',
        backgroundPosition: 'top center',
    },
    backgroundImg: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        position: 'absolute'
    },
    img: {
        width: '50vw',
        objectFit: 'contain'
    },
    dividerIcon: {
        width: '100%',
        position: 'absolute',
        bottom: '30px',
        textAlign: 'center'
    },
    icon: {
        width: '30px',
        objectFit: 'contain',
        transform: 'rotate(-26deg)'
    },
    credits: {
        height: '20vh',
        width: '100vw',
        backgroundColor: 'white',
    },
    creditTitle: {
        height: '10vh',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        '& .MuiTypography-body1': {
            fontWeight: '200',
            letterSpacing: '5px',
            fontSize: '35px',
            color: '#111',
        }
    },
    divider: {
        height: '40vh',
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    titleBox: {
        textAlign: 'center',
        position: 'absolute',
        zIndex: '10',
        width: '100vw',
        top: '35vh',
    },
    title: {
        color: 'rgba(255,255,255, 0.85)',
        fontFamily: 'MarvelRegular',
        fontSize: '80px',
        letterSpacing: '5px',
        margin: 0
    },
    subtitle: {
        color: 'rgba(255,255,255, 0.70)',
        fontFamily: 'Open Sans, arial, sans-serif',
        letterSpacing: '2px',
        fontSize: '15px',
    }
}));


const Credits = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.credits}>
                <Divider />
                <Grid className={classes.creditTitle}>
                    <Typography>
                        CREDITS
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid>
                        <Typography variant="h6">
                            API: MARVEL DEVELOPER
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6">
                            DEPLOYMENT: NETLIFY
                        </Typography>
                    </Grid>
                    <Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Credits;