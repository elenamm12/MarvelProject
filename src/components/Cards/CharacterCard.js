import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Divider from '../../components/Divider';
import comic from '../../assets/images/comic.jpeg'

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '2px',
        margin: '20px',
        boxShadow: '0.2px 0.2px 7px grey',
        height: '100%',
        transition: 'transform 0.5s',
        '&:hover': {
            transform: 'scale(1.1)',
            zIndex: '97'
        }
    },
    img: {
        width: '100%',
        borderRadius: '2px 2px 0 0',
        filter: 'brightness(40%)'
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


const CharacterCard = (props) => {

    const classes = useStyles();
    const [element, setElement] = useState(props.element)

    return (
        <Grid item className={classes.card} xs={11} sm={5} md={2} lg={2}>
            <Grid container justifyContent="center">
                <img className={classes.img}
                    src={`${element.thumbnail.path}/portrait_uncanny.${element.thumbnail.extension}`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = `${comic}`;
                    }}
                ></img>
            </Grid>
            <Divider />
            <Grid className={classes.infoBox}>
                <h4 className={classes.title}>{element.name}</h4>
                <p className={classes.information}>COMICS: {element.comics.available}</p>
                <p className={classes.information}>SERIES: {element.series.available}</p>
                <p className={classes.information}>EVENTS: {element.events.available}</p>
                <p className={classes.information}>STORIES: {element.stories.available}</p>
            </Grid>

        </Grid>
    );
};

export default CharacterCard;