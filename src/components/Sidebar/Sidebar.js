import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Sidebar({ subreddits }) {
  return (
    <Box display="flex" flexDirection="column">
      {subreddits && subreddits.map(subreddit => (
        <Link key={subreddit} to={`/r/${subreddit}`}>{subreddit}</Link>
      ))}
    </Box>
  );
}

export default Sidebar;