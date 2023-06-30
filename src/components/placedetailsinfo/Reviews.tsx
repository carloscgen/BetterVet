import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import { IPlace } from '../../services/PlacesService';

interface IPlaceDetails {
    place: IPlace
}

export const Reviews = ({ place }: IPlaceDetails)  => {
    const reviews = place?.reviews?.slice(0, 10);

    const ratingNumber = (rating: string | undefined) => {
        if (rating) {
            return Number(rating)
        } else {
            return ''
        }
    };

    const formatDate = (date: string | undefined) => {
        if (date) {
            const format = new Date(date);
            return format.getFullYear() + '-' + (format.getMonth() + 1) + '-' + format.getDate();
        } else {
            return ''
        }
    }
    return (
        <Box>
            {reviews && reviews?.length >= 1 ? (
                reviews?.map(review => {
                    if (review !== null) {
                        return (
                            <List key={review.title} sx={{ 
                                // width: '100%', 
                                maxWidth: { xs: 200, sm: 500, md: '100%', lg: '100%', xl: '100%' }, 
                                bgcolor: 'background.paper' 
                            }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar sx={{ display: {xs: 'none', sm: 'none'}}}>
                                        <Avatar alt="" src="" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={review?.title}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >

                                                </Typography>
                                                {' '}
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Box display={'flex'} >
                                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                                            Review Date: {formatDate(review?.published_date)}
                                                        </Typography>

                                                    </Box>
                                                    <Typography sx={{ fontSize: 16, overflowWrap: 'break-word' }} gutterBottom>
                                                        Web: {review?.url ? review?.url : 'n/a'}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 16 }} gutterBottom>
                                                        Rating: {review?.rating ? review?.rating : 'n/a'}
                                                    </Typography>
                                                    <Rating name="half-rating-read" value={+ratingNumber(review?.rating)} defaultValue={0} precision={0.5} readOnly />
                                                </Box>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider sx={{ ml: 0 }} variant="inset" component="li" />
                            </List>)
                    } else {
                        return 'no reviews yet...'
                    }
                })
            ) : (
                'no reviews yet...'
            )
            }
        </Box>
    );
}