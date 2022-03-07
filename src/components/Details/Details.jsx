import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './Details.css'
import Paper from '@mui/material/Paper';
function movieDetail(){
    const theme = createTheme({
        typography: {
          // Tell MUI what the font-size on the html element is.
          htmlFontSize: 15,
        },
        button: {
            fontStyle: 'italic',
          }
      });

 const movieDetails = useSelector(state =>state.holdMovieDetails)
 const history = useHistory();

 //returns user back to List onClick
    const returnToList = ()=>{
        console.log('returning to List');
        history.push('/');
    }

//displays details of chosen movie from a reducer holding only one item

 return(
     <Paper>
     <div>
     
     <h3 className='titleHeader'>{movieDetails.title}</h3>
     <img src={movieDetails.poster} alt={movieDetails.title}/>
     <ThemeProvider theme={theme}>
        <Typography>{movieDetails.genres}</Typography>
        <Typography>{movieDetails.description}</Typography>
        
        <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={returnToList}>Back to List</Button>
        </Stack>
        </ThemeProvider>
       
       
     </div>
     </Paper>
 )
}

export default movieDetail;