import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Button, Box, CardActionArea, CardActions, Grid } from '@mui/material';
import { IPlace } from '../../../services/PlacesService';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

interface IPlaceData {
  place: IPlace
}

export const PlaceCard = ({ place }: IPlaceData) => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { setPlace } = bindActionCreators(actionCreators, dispatch);
  
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ display: 'flex', justifyContent: 'center'}}>
      <Card sx={{
        m: 1, 
        maxWidth: { xs: 345, sm: 345, md: '100%', lg: '90%', xl: '90%' },
        flexGrow: 1,
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);'
      }}
        onClick={() => { setPlace(place) }}>
        <CardActionArea>
          <CardHeader
            sx={{
              pb: 1
            }}
            title={place.name}
            subheader={place.location_string}
          />
          <CardMedia
            component="img"
            height="194"
            image={place.photo?.images.medium.url ? place.photo?.images.medium.url : ''}
            alt="Restaurant Image"
          />
          <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color='error' />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </Box>
            <Button size="small" onClick={() => navigate("/details")}>See Details</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}