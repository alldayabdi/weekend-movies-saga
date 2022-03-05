import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MovieItem ({movie}){

    function handleClick(id){
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }
    return (
        <>
        
          <Card 
           onClick={() => handleClick(movie.id)} key={movie.id}
          sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt={movie.title}
                height="170"
                image={movie.poster}
            />
            <CardContent>
                <Typography gutterBottom variant="b1" component="div">
                    {movie.title}
                </Typography>
            </CardContent>
        </Card>
        

        </>
    )

}

export default MovieItem;