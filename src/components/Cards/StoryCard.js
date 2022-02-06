import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Divider from '../../components/Divider';
import comic from '../../assets/images/comic.jpeg'

const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
        borderRadius: '2px 2px 0 0',
        filter: 'brightness(40%)',
    },
    infoBox: {
        margin: '10px 15px 10px 15px',
        fontFamily: 'Open Sans, arial, sans-serif',
    },
    title: {
        textTransform: 'uppercase',
        margin: '10px 0 10px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        height: '22px'
    },
    information: {
        margin: '5px 0 5px 0'
    }
}));


const StoryCard = ({element}) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container justifyContent="center">
                <img className={classes.img} id="cardImg"
                    src={element.thumbnail !== null ? `${element.thumbnail.path}/portrait_uncanny.${element.thumbnail.extension}` : comic}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = `${comic}`;
                    }}
                ></img>
            </Grid>
            <Divider />
            <Grid className={classes.infoBox}>
                <h4 className={classes.title}>{element.title}</h4>
                <p className={classes.information}>COMICS: {element.comics.available}</p>
                <p className={classes.information}>SERIES: {element.series.available}</p>
                <p className={classes.information}>EVENTS: {element.events.available}</p>
                <p className={classes.information}>CREATORS: {element.creators.available}</p>
            </Grid>

        </Grid>
    );
};

export default StoryCard;