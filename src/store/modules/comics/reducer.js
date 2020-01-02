import { GET_COMICS, SEARCH_COMICS, GET_CHARACTER } from '../typeAction';

const initialState = {
    comics: [],
    comic: undefined,
    pagination: {},
    totalComics:'',
    limit: '',
    idCharacter: 0
};

export const comic = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMICS: {
            const {
                results,
                limit,
                offset,
                total,
                count,
              } = action.payload.data.data;

              return {
                ...state,
                limit: limit,
                offset,
                totalComics: total,
                count,
                comics: results,
              }
        }
        case GET_CHARACTER: {
            return { ...state, idCharacter: action.payload.data.data.results[0].id };
        }
        case SEARCH_COMICS: {
            const {
                results,
                limit,
                offset,
                total,
                count,
              } = action.payload.data.data;

              return {
                ...state,
                limit: limit,
                offset,
                totalComics: total,
                count,
                comics: results,
              }
        }
        default: {
            return state;
        }
    }
}
