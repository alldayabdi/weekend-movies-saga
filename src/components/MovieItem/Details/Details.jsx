import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function movieDetail(){

 const movieDetails = useSelector(state =>state.holdMovieDetails)
 const history = useHistory();

 //returns user back to List onClick
    const returnToList = ()=>{
        console.log('returning to List');
        history.push('/');
    }

//displays details of chosen movie from a reducer holding only one item

 return(
     <div>
     
     <h3>{movieDetails.title}</h3>
     <img src={movieDetails.poster} alt={movieDetails.title}/>
        <h4>{movieDetails.genres}</h4>
        <h3>{movieDetails.description}</h3>
        <button onClick={returnToList}>Back to List</button>
     </div>
 )
}

export default movieDetail;