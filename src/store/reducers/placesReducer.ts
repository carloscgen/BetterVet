import { IPlace } from '../../services/PlacesService'
import { ActionType } from '../action-types';
import { ACTION } from '../actions'

export interface IStoreData {
        places: IPlace[]
        place: IPlace
        lat: string,
        lng: string
}

export const placesReducer = (state: IStoreData = {
        places: [],
        place: {
            name: '',
            latitude: '',
            longitude: '',
            location_id: '',
            location_string: '',
            num_reviews: '',
            photo: {   
                images:{
                    medium:{
                        url: ''
                    }
                },
            },
            ranking_category: 'Restaurant',
            rating: '',
            reviews: [
                {
                    published_date: '',
                    rating: '',
                    title: '',
                    url: ''
                }
            ],
            website: '',
            email: '',
            address_obj: {
                street1: '',
                city: '',
            },
            ranking: '',
            ranking_position: '',
            distance_string: ''
        },
        lat: '',
        lng: ''
}, action: ACTION) =>{
    switch (action.type){
        case ActionType.ADD_PLACES:
            return {...state, places: [...action.payload]};
        case ActionType.SET_PLACE:
            return {...state, place: action.payload};
        case ActionType.SET_LAT:
            return {...state, lat: action.payload};
        case ActionType.SET_LNG:
            return {...state, lng: action.payload};
        default:
             return state;
    }
}
