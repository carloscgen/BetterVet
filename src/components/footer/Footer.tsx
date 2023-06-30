import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { useNavigate } from "react-router-dom";
import { BottomNavigation } from '@mui/material';

export const Footer = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }

  return (
    <Box sx={{
      width: '100%',
      bottom: 0,
      position: 'fixed',
      zIndex: '1500'
    }}>
      <BottomNavigation
        sx={{
          display: 'flex',
          alignItems: 'center',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(38, 166, 154, 0.7)',
          pt: 1,
          pb: 1,
          maxHeight: '30px'
        }}
        showLabels
      >
        <LocalPizzaIcon onClick={handleClick} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer', color: '#fff' }} />
        <Typography
          variant="body1"
          noWrap
          component="a"
          onClick={handleClick}
          sx={{
            color: '#fff',
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          MEAL FINDER
        </Typography>
      </BottomNavigation>
    </Box>
  );
}
