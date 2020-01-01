import { GET_COMICS, SEARCH_COMICS, GET_CHARACTER, PAGINATE_COMICS } from '../typeAction';
import produce from 'immer'

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
        // case SEARCH_COMICS:
        //     return produce(state, draft =>{
        //         const indexProduct  = draft.findIndex((p) => p.id === action.product.id);
        //         if(indexProduct >= 0){
        //             draft[indexProduct].amount +=1;
        //         }
        //         else{
        //             draft.push({
        //                 ...action.product,
        //                 amount: 1
        //             })
        //         }
        //     })
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
