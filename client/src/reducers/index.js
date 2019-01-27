const initState = {
    isFetching: false,
    data: [],
    err: null
}

const getMovies = (state = initState, action) => {
    switch (action.type) {
        case 'MOVIE_FETCH_START':
        return {
            ...state,
            isFetching: true
        };
        case 'MOVIE_FETCH_SUCCESS':
        return {
            ...state,
            isFetching: false,
            data: action.data,
            err: null
        }
        case 'MOVIE_FETCH_FAIL':
        return {
            ...state,
            isFetching: false,
            err: action.err
        }
        default:
        return state;
    }
};

export default getMovies;