import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailList(){
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

}