import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import CharacterCard from '../Cards/CharacterCard';
import ComicCard from '../Cards/ComicCard';
import CreatorCard from '../Cards/CreatorCard';
import EventCard from '../Cards/EventCard';
import StoryCard from '../Cards/StoryCard';

const useStyles = makeStyles(theme => ({
    main: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FBFBFB',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
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
            zIndex: '97',
            '& #cardImg': {
                filter: 'brightness(100%)'
            }
        },
    },
}));

const GridElements = ({ pagination, list, cardType }) => {

    const classes = useStyles();

    const handleCard = (element, index) => {
        switch (cardType) {
            case 'characters':
                return (
                    <CharacterCard key={index} element={element} />
                );
            case 'comics':
                return (
                    <ComicCard key={index} element={element} />
                );
            case 'creators':
                return (
                    <CreatorCard key={index} element={element} />
                );
            case 'events':
                return (
                    <EventCard key={index} element={element} />
                );
            case 'stories':
                return (
                    <StoryCard key={index} element={element} />
                );
            default:
                return (
                    <CharacterCard key={index} element={element} />
                );
        }
    }

    let date = new Date()



    return (
        <div>
            <Grid className={classes.main}>
                <Grid className={classes.container}>
                    <Grid container justifyContent="center" key={date}>
                        {list.map((element, index) => (
                            <Grid key={index} item className={classes.card} xs={11} sm={5} md={2} lg={2}>
                                {handleCard(element, index)}
                            </Grid>
                        ))}
                    </Grid>
                    <Grid>
                        pagination
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default GridElements;