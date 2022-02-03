import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core'
import shield from '../../assets/images/shield.jpeg'
import { makeStyles } from '@mui/styles';
import GridElements from '../../components/Grid';
import { charactersService } from '../../services/service.characters';

const useStyles = makeStyles(theme => ({
    main: {
        height: '40vh',
        width: '100vw',
        backgroundColor: '#010101',
        backgroundImage: `url(${shield})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50% auto',
        backgroundPosition: 'top center',
    },
    titleBox: {
        textAlign: 'center',
        position: 'absolute',
        zIndex: '10',
        width: '100vw',
        top: '15vh',
    },
    title: {
        color: 'rgba(255,255,255, 0.85)',
        fontFamily: 'MarvelRegular',
        fontSize: '80px',
        letterSpacing: '5px',
        margin: 0
    }
}));


const Characters = () => {

    const classes = useStyles();
    const [elements, setElements] = useState([])
    const [pagination, setPagination] = useState('')

    const aux = [
        {name: 'capitan', y:'1'},
        {name: 'thor', y:'2'},
        {name: 'hulk', y:'3'},
        {name: 'ironman', y:'4'},
        {name: 'capitana marvel', y:'5'} 
    ]

    useEffect(async () => {
        let aux = await charactersService.getCharacters()
        setElements(aux.data.results)
        delete aux.data.results
        setPagination(aux.data)
    }, [])

    return (
        <div>
            <Grid className={classes.main}>
                <Grid className={classes.titleBox}>
                    <p className={classes.title}>CHARACTERS</p>
                    <Grid>
                        buscador
                    </Grid>
                </Grid>
            </Grid>
            <GridElements list={elements} pagination={pagination}/>
        </div>
    );
};

export default Characters;