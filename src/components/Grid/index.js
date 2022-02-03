import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Divider from '../../components/Divider';
import CharacterCard from '../Cards/CharacterCard';

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
}));


const GridElements = (props) => {

    const classes = useStyles();
    const [elements, setElements] = useState([])

    useEffect(async () => {
        setElements(props.list)
    }, [props.list])

    return (
        <div>
            <Grid className={classes.main}>
                <Divider />
                <Grid className={classes.container}>
                    <Grid container justifyContent="center">
                        {elements.map((element, index) => (
                            <CharacterCard key={index} element={element} />
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