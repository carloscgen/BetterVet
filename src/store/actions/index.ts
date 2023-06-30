import { ActionType } from '../action-types/index';

export interface IAddPlacesAction {
    type: ActionType.ADD_PLACES,
    // TODO: fix type
    payload: any
}
export interface ISetPlaceAction {
    type: ActionType.SET_PLACE,
    payload: any
}

export interface IGetPlaceAction {
    type: ActionType.GET_PLACE,
    // TODO: fix type
    payload: any
}

export interface ISetLatAction {
    type: ActionType.SET_LAT,
    payload: string
}

export interface ISetLngAction {
    type: ActionType.SET_LNG,
    payload: string
}


export type ACTION = IAddPlacesAction | IGetPlaceAction | ISetLatAction | ISetLngAction | ISetPlaceAction