import { combineReducers } from 'redux';
import { placesReducer } from '../reducers/placesReducer';

export const reducers = combineReducers({
    storePlaces: placesReducer
})

export type State = ReturnType<typeof reducers>