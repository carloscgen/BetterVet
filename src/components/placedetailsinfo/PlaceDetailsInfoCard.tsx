import { Typography, Box, Rating } from '@mui/material'
import React from 'react'
import { capitalizeFirstLetter } from '../../utils/stringUtils'
import { useSelector } from 'react-redux'
import { IStoreSelector } from '../body/Home'

export const PlaceDetailsInfoCard = () => {
    const { storePlaces } = useSelector((state: IStoreSelector) => state)

    const ratingNumber = Number(storePlaces?.place?.rating);
    
    return (
        <>
            <Typography gutterBottom variant="h5" component="div">
                {storePlaces?.place?.name}
            </Typography>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
                {`Type of place - ${capitalizeFirstLetter(storePlaces?.place?.ranking_category ? storePlaces?.place?.ranking_category : 'n/a')}`}
            </Typography>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
                {`Location: ${storePlaces?.place?.location_string ? storePlaces?.place?.location_string : 'n/a'}`}
            </Typography>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
                {`Address: ${storePlaces?.place?.address_obj?.street1 ? storePlaces?.place?.address_obj?.street1 : 'n/a'}`}
            </Typography>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
                {`Distance: ${storePlaces?.place?.distance_string ? storePlaces?.place?.distance_string : 'n/a'}`}
            </Typography>
            <Typography sx={{ fontSize: 16, overflowWrap: 'break-word' }} gutterBottom>
                {`Website: ${storePlaces?.place?.website ? storePlaces?.place?.website : 'n/a'}`}
            </Typography>
            <Box sx={{
                display: 'flex'
            }}>
                <Typography sx={{ fontSize: 16 }} gutterBottom>
                    Rating: {storePlaces?.place?.rating ? storePlaces?.place?.rating : 'n/a'}
                </Typography>
                <Rating name="half-rating-read" value={+ratingNumber} defaultValue={0} precision={0.5} readOnly />
            </Box>
            <Typography variant="body2" color="text.secondary">
                Hope that the information has been useful, you can see the reviews of the place to learn more about the opinion of the clients
            </Typography>
        </>
    )
}
