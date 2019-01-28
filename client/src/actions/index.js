import axios from 'axios';

const requestMovieStart = () => {
    return {
        type : 'MOVIE_FETCH_START',
    };
}

const requestMovieSuccess = res => {
    return {
        type : 'MOVIE_FETCH_SUCCESS',
        data : res.data,
    };
}

const requestMovieFail = err => {
    return {
        type : 'MOVIE_FETCH_FAIL',
        err,
    };
}

export const getMovie = () => {
    return (dispatch, getState) => {
        dispatch(requestMovieStart());
        axios
            .get('/api/movies')
            .then(res => {
                // console.log('getMovie')
                dispatch(requestMovieSuccess(res))
            })
            .catch(err => {
                dispatch(requestMovieFail(err))
            })
    }   
}

export const updateMovie = (id, newCtg) => {
    return (dispatch, getState) => {
        dispatch(requestMovieStart());
        axios
            .put(`/api/movies/${id}`, newCtg)
            .then(res => {
                dispatch(requestMovieSuccess(res))
            })
            .catch(err => {
                dispatch(requestMovieFail(err))
            })
    }   
}
