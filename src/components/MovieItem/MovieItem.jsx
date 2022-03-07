import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from 'react-router-dom'; 
import Typography from '@mui/material/Typography';

function MovieItem ({movie}){

    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    const handleClick = (id) =>{
        console.log(id);
        const movieToDetail = id
        console.log(movieToDetail);
        dispatch({type: "GET_DETAILS", payload: movieToDetail })

        history.push('/detail')
    }
    
    return (
        <>
        
          <Card 
          onClick={() => handleClick(movie.id)}
            key={movie.id}
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