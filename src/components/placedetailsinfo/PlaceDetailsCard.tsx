import React from 'react'
import { Box, Typography, Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Button } from '@mui/material'
import { DrawerHeader, IStoreSelector } from '../body/Home'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlaceDetailsInfoCard } from './PlaceDetailsInfoCard';
import { Reviews } from './Reviews';


export const PlaceDetailsCard = () => {
  let navigate = useNavigate();

  const { storePlaces } = useSelector((state: IStoreSelector) => state)

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
        borderRadius: '10px',
        maxWidth: { xs: 300, sm: 500, md: '100%', lg: '100%', xl: '100%' },
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);'
      }}>
        <Box sx={{
          backgroundColor: 'rgba(38, 166, 154, 0.1)',
          p: 1,
          borderTopRightRadius: '10px',
          borderTopLeftRadius: '10px'
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
            Details of this great place to eat
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box p={2} sx={{
            }}>
              <Card sx={{
                maxWidth: { xs: 300, sm: 500, md: '100%', lg: '100%', xl: '100%' }
              }}>
                <CardMedia
                  component="img"
                  alt="Restaurant Image"
                  sx={{ height: 250 }}
                  image={storePlaces?.place?.photo?.images?.medium?.url ? storePlaces?.place?.photo?.images?.medium?.url : ''}
                  title="Restaurant Image"
                />
                <CardContent>
                  <PlaceDetailsInfoCard />
                </CardContent>
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
                  <Button size="small" onClick={() => navigate("/")}>Go Back</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>

          {/* REVIEWS */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box p={2}>
              <Card sx={{ maxWidth: { xs: 320, sm: 500, md: '100%', lg: '100%', xl: '100%' } }}>
                <CardHeader
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                  title="Reviews"
                  subheader={
                    <>
                      {storePlaces?.place?.ranking ? storePlaces?.place?.ranking : 'n/a'}
                      <Typography gutterBottom>
                        Ranking Position: {storePlaces?.place?.ranking_position ? storePlaces?.place?.ranking_position : 'n/a'}
                      </Typography>
                    </>
                  }
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                  <Reviews place={storePlaces?.place} />
                </CardContent>
              </Card>
            </Box>
          </Grid>
          {/* END REVIEWS */}
        </Grid>
      </Box>
    </Box>
  )
}
