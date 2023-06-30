import thunk from "redux-thunk";
import { render, screen } from '@testing-library/react';
import { PlaceDetailsInfoCard } from "./PlaceDetailsInfoCard";
import { Provider } from "react-redux";
import { reducers } from "../../store/reducers";
import {legacy_createStore as createStore, applyMiddleware} from 'redux'

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

describe("Test component parts", () => {
    test("Show type of place", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Type of place - Restaurant');
        expect(value).toBeInTheDocument();
    });

    test("Show location place", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Location: Berlin');
        expect(value).toBeInTheDocument();
    });

    test("Address", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Address: n/a');
        expect(value).toBeInTheDocument();
    });

    test("Distance", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Distance: 8.0 km');
        expect(value).toBeInTheDocument();
    });

    test("Website", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Website: n/a');
        expect(value).toBeInTheDocument();
    });

    test("Rating", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Rating: 4.8');
        expect(value).toBeInTheDocument();
    });

    test("Bottom text", () => {
        render(
            <Provider store={storePlaces}>
                <PlaceDetailsInfoCard />
            </Provider>
        );
        const value = screen.getByText('Hope that the information has been useful, you can see the reviews of the place to learn more about the opinion of the clients');
        expect(value).toBeInTheDocument();
    });
});