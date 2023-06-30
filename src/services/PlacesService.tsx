import axios from 'axios';

export interface IReview {
    published_date?: string,
    rating?: string,
    title?: string,
    url?: string
}

interface IPlacePhoto {
    images: {
        medium: {
            url: string
        }
    }
}

export interface IPlace {
    name: string,
    latitude: string,
    longitude: string,
    num_reviews: string,
    location_string: string,
    rating: string,
    reviews?: IReview[] | null
    website?: string
    email: string,
    ranking_category: string
    photo: IPlacePhoto | null
    location_id: string,
    address_obj: {
        street1: string,
        city: string,
    },
    ranking: string,
    ranking_position: string,
    distance_string: string,
}

export interface IPlacesResponse {
    data: IPlace[]
}

export const GetPlacesByLatLng = async (lat : string, lng: string) : Promise<IPlacesResponse> => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
            params: {
              latitude: lat,
              longitude: lng,
              limit: '10',
              distance: '8',
              open_now: 'false',
              lunit: 'km'
            },
            headers: {
              'content-type': 'application/octet-stream',
            //   'X-RapidAPI-Key': 'aee2e5a094mshb8a980730a97ae2p1123fbjsnef9fae761e9f', reached maximum quota
              'X-RapidAPI-Key': 'c8ac15794cmsh99545c79d6b4ce5p125e6fjsna254f95cec67',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        const place: IPlacesResponse = response?.data;
        return place;
    } catch (error) {
        const res = error as any
        console.error(error);
        return res;
    }
}
