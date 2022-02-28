import React from 'react';
import { Pagination } from '@mui/material'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: '15px',
        display: 'flex',
        justifyContent: 'center',
        "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#891E15"
        }
    }
}));

const PaginationComponent = ({page, count, onChange}) => {

    const classes = useStyles();

    const handlePage = (event, value) => {
        onChange(value-1)
    }

    return (
        <Grid className={classes.container}>
            <Pagination size="large" onChange={handlePage} count={count} page={page+1}  color="primary" />
        </Grid>
    );
}
 
export default PaginationComponent;