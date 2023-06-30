import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { useNavigate } from "react-router-dom";


export const Header = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }

  return (
    <AppBar position="fixed" sx={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(38, 166, 154, 0.7)',
    }}>
      <Container maxWidth="xl">
        <Toolbar sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' }
        }} disableGutters>
          <LocalPizzaIcon onClick={handleClick} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleClick}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            MEAL FINDER
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' },
            alignItems: 'center'
          }}>
            <LocalPizzaIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MEAL FINDER
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
