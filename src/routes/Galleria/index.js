import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core'
import shield from '../../assets/images/shield.jpeg'
import { makeStyles } from '@mui/styles';
import GridElements from '../../components/Grid';
import { marvelService } from '../../services/service.marvel';
import SearchBar from '../../components/SearchBar';
import $ from 'jquery';
import LoadingGrid from '../../components/LoadingGrid';

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
        margin: '0 0 30px 0',
        textTransform: 'uppercase'
    }
}));


const Galleria = () => {

    const classes = useStyles();
    const [elements, setElements] = useState([])
    const [pagination, setPagination] = useState('')
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(true)
    const { galleriaType } = useParams();
    const [page, setPage] = useState(0)

    useEffect(async () => {
        handleData()
    }, [ , page])

    const handleGetData = async () => {
        switch (galleriaType) {
            case 'characters':
                return marvelService.getCharacters(keyword, page);
            case 'comics':
                return marvelService.getComics(keyword, page);
            case 'creators':
                return marvelService.getCreators(keyword, page);
            case 'events':
                return marvelService.getEvents(keyword, page);
            case 'stories':
                return marvelService.getStories(keyword, page);
            default:
                return marvelService.getCharacters(keyword, page);
        }
    }

    const handleData = async () => {
        setLoading(true)
        let aux
        aux = await handleGetData()
        setElements(aux.data.results)
        delete aux.data.results
        setPagination(aux.data)
        setTimeout(() => {
            setLoading(false)
        }, 100);
    }

    $("#inputMe").unbind().keydown(function (e) {
        if (e.key === 'Enter') {
            handleData()
        }
    });

    $("#buttonMe").unbind().click(function () {
        handleData()
    });

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    const handlePage = (value) => {
        setPage(value)
    }

    return (
        <div>
            <Grid className={classes.main}>
                <Grid className={classes.titleBox}>
                    <p className={classes.title}>{galleriaType}</p>
                    <Grid>
                        <SearchBar placeholder={`Search for ${galleriaType}`} keyword={keyword} onChange={handleChange} />
                    </Grid>
                </Grid>
            </Grid>
            <LoadingGrid Component={<GridElements page={page} handlePage={handlePage} list={elements} pagination={pagination} cardType={galleriaType} />} loading={loading} />
        </div>
    );
};

export default Galleria;