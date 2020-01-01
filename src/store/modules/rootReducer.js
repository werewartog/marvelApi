import {combineReducers} from 'redux';
import { comic } from '../../store/modules/comics/reducer'
import { comons } from '../../store/modules/comons/reducer'

export default combineReducers ({
    comic,
    comons
})
