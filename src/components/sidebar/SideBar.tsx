import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const drawerWidth = 120;

const closedMixin = (theme: Theme): CSSObject => {
  let obj : CSSObject = {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    marginTop: `calc(${theme.spacing(8)} + 1px)`,
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '56px'
    },
  }
  return obj;
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  position: 'relative',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open, theme }) => ({
  width: open ? drawerWidth : theme.spacing(7),
  height: '100%',
  overflow: 'auto',
  transition: open
    ? theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
      '& .MuiDrawer-paper': {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
      overflowX: 'hidden',
      [theme.breakpoints.down('sm')]: {
          marginTop: '56px'
        },
      [theme.breakpoints.up('sm')]: {
        marginTop: `calc(${theme.spacing(8)} + 1px)`
      },
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export const SideBar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const toogleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <StyledDrawer  variant="permanent" open={open}>
        <Divider />
        {/* lista items */}
        <List>
          {/* {['Bistro', 'Bars'].map((text, index) => ( */}
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                href='https://www.theworlds50best.com/' target='blank'
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <RestaurantIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Bistro'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            href='https://www.worlds50bestbars.com/' target='blank'
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary={'Bar'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        {/* logout */}
        <DrawerHeader sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(0, 1),
        }}>
          <IconButton onClick={toogleDrawer}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
      </StyledDrawer >
    </Box>
  );
}