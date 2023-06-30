import { useCallback, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography, Grid, CircularProgress } from '@mui/material';
import { AutoComplete } from '../autocomplete/Autocomplete';
import { GetPlacesByLatLng, IPlace } from '../../services/PlacesService';
import { useSelector } from 'react-redux';
import { IStoreData } from '../../store/reducers/placesReducer';
import { PlaceCard } from './PlaceCard/PlaceCard';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
import { useDispatch } from 'react-redux';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  position: 'relative',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface IGeolocationCoordinates {
  coords: {
    latitude: number
    longitude: number
  }
}

interface IGeolocationError {
  message: string
}

interface ICoordinatesFromBrowser {
  lat: string | null,
  lng: string | null
}

export interface IStoreSelector {
  storePlaces: IStoreData
}

export const Home = () => {
  const dispatch = useDispatch();
  const { setLat, setLng, addPlaces } = bindActionCreators(actionCreators, dispatch);
  const [currentGeolocation, setCurrentGeolocation] = useState<boolean>(false);
  const [coordinatesFromBrowser, setCoordinatesFromBrowser] = useState<ICoordinatesFromBrowser>({ lat: null, lng: null })
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { storePlaces } = useSelector((state: IStoreSelector) => state)

  const fetchPlaces = useCallback(
    async () => {
      if (currentGeolocation && coordinatesFromBrowser.lat && coordinatesFromBrowser.lng) {
        try {
          setIsLoading(true);
          const { data } = await GetPlacesByLatLng(coordinatesFromBrowser.lat, coordinatesFromBrowser.lng);
          const places: IPlace[] = data;
          if (places && places.length > 0) {
            const sortedPlaces = places.sort((a, b) => Number(b?.rating) - Number(a?.rating)).filter((item) => item?.name);
            addPlaces(sortedPlaces);
          } else {
            addPlaces([]);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setCoordinatesFromBrowser({ lat: null, lng: null })
        }
      }
      else if (storePlaces?.lat && storePlaces?.lng) {
        try {
          setIsLoading(true);
          const { data } = await GetPlacesByLatLng(storePlaces?.lat, storePlaces?.lng);
          const places: IPlace[] = data;
          if (places && places.length > 0) {
            const sortedPlaces = places.sort((a, b) => Number(b?.rating) - Number(a?.rating)).filter((item) => item?.name);
            addPlaces(sortedPlaces);
          } else {
            addPlaces([]);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [coordinatesFromBrowser.lat, coordinatesFromBrowser.lng, currentGeolocation, storePlaces?.lat, storePlaces?.lng])

  const getCurrentGeolocation = useCallback(() => {

    const successCallback = (position: IGeolocationCoordinates) => {
      const lat = String(position?.coords?.latitude)
      const lng = String(position?.coords?.longitude)
      setLat(lat);
      setLng(lng);
      setCurrentGeolocation(true);
      setCoordinatesFromBrowser({ lat, lng })
    };

    const errorCallback = (error: IGeolocationError) => {
      setCurrentGeolocation(false);
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [setLat, setLng])

  useEffect(() => {
    getCurrentGeolocation();
  }, [getCurrentGeolocation])


  useEffect(() => {
    fetchPlaces()
      .finally(() => {
        setIsLoading(false)
      });
  }, [fetchPlaces])

  return (
    <Box component="main" sx={{
      flexGrow: 1,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <DrawerHeader />
      <Box sx={{
        backgroundColor: 'rgba(38, 166, 154, 0.1)',
        p: 1,
        borderRadius: '10px',
        pt: 1,
        mb: 2,
        width: '100%'
      }}
      >
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            mt: 2,
            mb: 2,
            fontSize: { xs: '16px', sm: '18px', md: '22px', lg: '24px', xl: '24px' }
          }}

          paragraph
        >
          Finding a place to go out a have a good meal???
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 4,
        py: 4,
        px: 2,
        alignItems: 'center',
        justifyItems: 'center',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);'
      }}>
        <AutoComplete />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100px',
        alignItems: 'center',
        flexGrow: 1,
        flexWrap: 'wrap',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        {isLoading && <CircularProgress sx={{ mb: 2, mt: 2 }} />}
        <Grid container spacing={2}>
          {storePlaces?.places.map((place, index) => {
            return (
              <PlaceCard key={index} place={place} />
            )
          })}
        </Grid>
        {storePlaces?.places.length < 1 && (
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              variant="h6"
              color="text.secondary"
            >

              No results...
            </Typography>
        )}
      </Box>
    </Box>
  )
}
