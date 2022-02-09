import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Divider from '../../components/Divider';
import comic from '../../assets/images/comic.jpeg'
import api from '../../assets/images/api.jpeg'
import deploy4 from '../../assets/images/deploy4.jpeg'


const useStyles = makeStyles(theme => ({
    main: { 
        height: '90vh'
    },
    credits: {
        width: '100vw',
        height: '100%',
        backgroundColor: 'white',
    },
    container: {
        marginTop: '40px',
        marginBottom: '80px',
        height: '100%',
    },
    img: {
        width: '70%', 
        height: '70%',
        objectFit: 'cover',
        filter: 'grayscale(100%)'
    },
    pannels: {
        textAlign: 'center',
        height: '100%',
        margin: '0 0 35px 0'
    },
    elementsTitle: {
        fontWeight: '200',
        letterSpacing: '6px',
        fontSize: '18px',
        color: '#111',
        fontFamily: 'Open Sans, arial, sans-serif',
        textTransform: 'uppercase',
        margin: '10px 0 10px 0'
    },
    description: {
        textAlign: 'justify',
        textJustify: 'inter-word',
        padding: '0 15% 0 15%',
        fontWeight: '100',
        letterSpacing: '2px',
        height: '20%',
        color: '#111',
        fontFamily: 'Open Sans, arial, sans-serif',
    }
}));


const Credits = () => {

    const classes = useStyles();

    const text = 'Lorem ipsum dolor sit amet, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    return (
        <div className={classes.main}>
            <Grid className={classes.credits}>
                <Divider />
                <Grid container justifyContent="center" className={classes.container}>
                    <Grid item xs={10} sm={4} md={4} lg={4} className={classes.pannels}>
                        <img src={api} className={classes.img}/>
                        <Typography className={classes.elementsTitle}>Api's Source</Typography>
                        <Typography className={classes.description}>{text}</Typography>
                    </Grid>
                    <Grid item xs={10} sm={4} md={4} lg={4} className={classes.pannels}>
                        <img src={comic} className={classes.img}/>
                        <Typography className={classes.elementsTitle}>Design Inspo</Typography>
                        <Typography className={classes.description}>{text}</Typography>
                    </Grid>
                    <Grid item xs={10} sm={4} md={4} lg={4} className={classes.pannels}>
                        <img src={deploy4} className={classes.img}/>
                        <Typography className={classes.elementsTitle}>Deployment</Typography>
                        <Typography className={classes.description}>{text}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Credits;