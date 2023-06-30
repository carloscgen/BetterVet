import { Dispatch } from 'redux';
import { IPlace } from "../../services/PlacesService";
import { ActionType } from "../action-types";
import { IAddPlacesAction, IGetPlaceAction, ISetLatAction, ISetLngAction, ISetPlaceAction } from '../actions';

export const addPlaces = (places: IPlace[]) =>{
    return (dispatch: Dispatch<IAddPlacesAction>) => {
        dispatch({
            type: ActionType.ADD_PLACES,
            payload: places
        })
    }
}

export const setPlace = (place: IPlace) =>{
    return (dispatch: Dispatch<ISetPlaceAction>) => {
        dispatch({
            type: ActionType.SET_PLACE,
            payload: place
        })
    }
}

export const getPlace = (place: IPlace) =>{
    return (dispatch: Dispatch<IGetPlaceAction>) => {
        dispatch({
            type: ActionType.GET_PLACE,
            payload: place
        })
    }
}

export const setLat = (lat: string) =>{
    return (dispatch: Dispatch<ISetLatAction>) => {
        dispatch({
            type: ActionType.SET_LAT,
            payload: lat
        })
    }
}

export const setLng = (lng: string) =>{
    return (dispatch: Dispatch<ISetLngAction>) => {
        dispatch({
            type: ActionType.SET_LNG,
            payload: lng
        })
    }
}
