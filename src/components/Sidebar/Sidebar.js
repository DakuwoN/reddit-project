import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink as RouterLink } from 'react-router-dom';

const ActiveLink = styled(RouterLink)(({ theme }) => ({
  color: 'gray',
  fontWeight: 'bold',
  '&:hover': {
    color: 'red',
  },
  '&.active': {
    color: 'red',
  },
}));

function Sidebar({ subreddits }) {
  
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '10px', marginTop: 3, border: '1px solid black' }}>
      <Typography variant="h6" component="div" sx={{ padding: '10px', textAlign: 'center' }}>
        Subreddits
      </Typography>
      <List component="nav" aria-label="subreddits">
        {subreddits && subreddits.map((subreddit) => (
          <ListItem button divider key={subreddit} component={ActiveLink} to={`/subreddit/${subreddit}`}>
            <ListItemText primary={subreddit} sx={{textAlign: 'center'}} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;