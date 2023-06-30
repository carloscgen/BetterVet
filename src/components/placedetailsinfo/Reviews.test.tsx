import thunk from "redux-thunk";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { reducers } from "../../store/reducers";
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import { Reviews } from "./Reviews";

const storePlaces = createStore(
    reducers,
    {
        storePlaces: {
            places: [
            ],
            place: {
                name: '',
                latitude: '',
                longitude: '',
                location_id: '',
                location_string: 'Berlin',
                num_reviews: '',
                photo: {
                    images: {
                        medium: {
                            url: ''
                        }
                    },
                },
                ranking_category: 'Restaurant',
                rating: '4.8',
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
                distance_string: '8.0 km'
            },
            lat: '',
            lng: ''
        }
    },
    applyMiddleware(thunk)
)

const place = {
    name: '',
    latitude: '',
    longitude: '',
    location_id: '',
    location_string: 'Berlin',
    num_reviews: '',
    photo: {
        images: {
            medium: {
                url: ''
            }
        },
    },
    ranking_category: 'Restaurant',
    rating: '4.8',
    reviews: [
        {
            published_date: '',
            rating: '4',
            title: 'Great Meal!!!',
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
    distance_string: '8.0 km'
}

describe("Test component parts", () => {
    test("Show title of review", () => {
        render(
            <Provider store={storePlaces}>
                <Reviews place={place} />
            </Provider>
        );
        const value = screen.getByText('Great Meal!!!');
        expect(value).toBeInTheDocument();
    });

    test("Show date", () => {
        render(
            <Provider store={storePlaces}>
                <Reviews place={place} />
            </Provider>
        );
        const value = screen.getByText('Review Date:');
        expect(value).toBeInTheDocument();
    });

    test("Show web", () => {
        render(
            <Provider store={storePlaces}>
                <Reviews place={place} />
            </Provider>
        );
        const value = screen.getByText('Web: n/a');
        expect(value).toBeInTheDocument();
    });

    test("Show rating", () => {
        render(
            <Provider store={storePlaces}>
                <Reviews place={place} />
            </Provider>
        );
        const value = screen.getByText('Rating: 4');
        expect(value).toBeInTheDocument();
    });
});