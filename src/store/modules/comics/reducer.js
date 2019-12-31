import { GET_COMICS, SEARCH_COMICS, GET_COMIC_BY_NAME, PAGINATE_COMICS } from '../typeAction';
import produce from 'immer'

const initialState = {
    comics: [],
    comic: undefined,
    pagination: {},
};

export const comic = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMICS: {

    console.log(action.payload.data.data)
            const {
                results,
                limit,
                offset,
                total,
                count,
              } = action.payload.data.data;

              return {
                ...state,
                limit,
                offset,
                total,
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
        case GET_COMIC_BY_NAME: {
            return { ...state, comic: action.payload.data.data };
        }
        case PAGINATE_COMICS: {
            return { ...state, pagination: action.payload.data };
        }
        default: {
            return state;
        }
    }
}
