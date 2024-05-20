import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, Avatar } from '@mui/material';
import { styled, alpha } from '@mui/system';
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export default function Header() {
  const theme = useTheme();
  const white = theme.palette.common.white;

    return (
      <AppBar position="static" sx={{ bgcolor: 'black'}}>
        <Toolbar>
          <Box mr={7}> {/* Adds margin to the right */}
            <Avatar alt="Reddit" src="https://play-lh.googleusercontent.com/FpCCoNLOt6LRIY_3NM5Rk_LDN-kFNz0yxdFjm-CYM4XavRQfoQlXxOtgC7abfexIDOE" />
          </Box>
          <Box mr={37}>
            <Typography variant="h6" noWrap component="div">
              Redddit
            </Typography>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Reddit…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    );
  }


