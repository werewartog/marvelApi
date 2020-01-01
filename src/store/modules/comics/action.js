import { GET_COMICS, SEARCH_COMICS, APPLICATION_LOADING, GET_CHARACTER } from '../typeAction';
import axios from 'axios';
import {disableScroll} from '../../../utils/disableScroll'

const API = 'https://gateway.marvel.com:443/v1/public';
const ts ="1576634385"
const hash = "67fcc46225dda9f915c1264f177ff755"
const apiKey = "7e2ddc6f5ad7aef6be4dcd693d56d58d"

const dispatchLoading = (loading = false) => {
    return {
        type: APPLICATION_LOADING,
        payload: {loading}
    }
};

export const getComics = (limit = 10, offset=0) => {
    return async dispatch => {
        dispatch(dispatchLoading(true))
        disableScroll(true)
        try {
            const data = await axios.get(`${API}/comics?limit=${limit}&ts=${ts}&apikey=${apiKey}&orderBy=title&offset=${offset * limit}&hash=${hash}`);
            dispatch({type:GET_COMICS, payload: data});
            dispatch(dispatchLoading(false));
            disableScroll(false);

        } catch (error) {
            console.log(error)
        }
    };
}

export const getCharacter = (name = 'spider-man') => {
    return async dispatch => {
        dispatch(dispatchLoading(true))
        disableScroll(true)
        try {
            const data = await axios.get(`${API}/characters?&ts=${ts}&name=${name}&apikey=${apiKey}&hash=${hash}`);
            dispatch({type:GET_CHARACTER, payload: data});
            dispatch(dispatchLoading(false));
            disableScroll(false);

        } catch (error) {
            console.log(error)
        }
    };
}

export const getComicById = (id = 1009351, limit=10, offset = 0) => {
    return async dispatch => {
        dispatch(dispatchLoading(true))
        disableScroll(true)
        try {
            const data = await axios.get(`${API}/characters/${id}/comics?&ts=${ts}&limit=${limit}&offset=${offset * limit}&apikey=${apiKey}&hash=${hash}`);
            dispatch({type:SEARCH_COMICS, payload: data});
            dispatch(dispatchLoading(false));
            disableScroll(false);

        } catch (error) {
            console.log(error)
        }
    };
}

// export const getCategory = (id) => {
//     return async dispatch => {
//         dispatch(dispatchLoading(true))

//         try {
//             const data = await axios.get(`${API}/categories/${id}`);

//             dispatch(dispatchLoading(false));
//             dispatch({type:ActionTypes.GET_CATEGORY, payload: data});

//         } catch (error) {
//             console.error(error);

//             dispatch(dispatchLoading(false))
//             dispatch(dispatchError(error))
//         }
//     };
// }

// export const search = (value) => {
//     return async dispatch => {
//         try {
//             const data = await axios.get(`${API}/search/products?q=${value}`);

//             dispatch({type:ActionTypes.SEARCH_COMICS, payload: data});

//         } catch (error) {
//             console.error(error);
//         }
//     };
// }

// export const getProduct = (id) => {
//     return async dispatch => {
//         dispatch(dispatchLoading(true))

//         try {
//             const data = await axios.get(`${API}/products/${id}`);

//             dispatch(dispatchLoading(false));
//             dispatch({type:ActionTypes.GET_PRODUCT, payload: data});

//         } catch (error) {
//             console.error(error);

//             dispatch(dispatchLoading(false))
//             dispatch(dispatchError(error))
//         }
//     };
// }

// export const paginateProducts = (page = 1, limit = 5) => {
//     return async dispatch => {
//         dispatch(dispatchLoading(true))

//         try {
//             const data = await axios.get(`${API}/products?page=${page}&limit=${limit}`);

//             dispatch(dispatchLoading(false));
//             dispatch({type:ActionTypes.PAGINATE_PRODUCTS, payload: data});

//         } catch (error) {
//             console.error(error);

//             dispatch(dispatchLoading(false))
//             dispatch(dispatchError(error))
//         }
//     };
// }
