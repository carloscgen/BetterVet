import React from 'react'
import { useRef, useEffect } from "react";
import "./styles.scss";
import { Loader } from '@googlemaps/js-api-loader';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store'

export const AutoComplete = () => {
    const autoCompleteRef = useRef();
    const inputRef = useRef();

    const dispatch = useDispatch();
    const { setLat, setLng } = bindActionCreators(actionCreators, dispatch);

    const loader = new Loader({
        apiKey: "",
        version: "weekly",
        libraries: ["places"]
    });

    useEffect(() => {
        loader.load()
            .then((google) => {
                autoCompleteRef.current = new google.maps.places.Autocomplete(
                    inputRef.current,
                );
                autoCompleteRef.current.addListener("place_changed", async function () {
                    const place = await autoCompleteRef.current.getPlace();
                    setLat(place?.geometry?.location?.lat());
                    setLng(place?.geometry?.location?.lng());
                });
            })
            .catch(error => {
                console.log(error)
            })
            // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setLat, setLng]);

    return (
        <div>
            <label>Enter address: </label>
            <br />
            <input ref={inputRef} />
        </div>
    );
};
