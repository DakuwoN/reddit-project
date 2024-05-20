import { Card, CardContent, CardMedia, Typography, Divider, CardActions, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward, Comment } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

function PostCard({ title, imageUrl, content }) {
  console.log('Rendering PostCard with props:', { title, imageUrl, content });
  const { subreddit } = useParams();
  console.log(subreddit)
  return (
    <Card sx={{ 
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '75%',
        marginBottom: 2,
        height: '500px',
        marginTop: 4,
        boxShadow: 3,
        '&:hover': {
            border: '2px solid black',
            borderColor: 'black',
        }
    }}>
         
      <CardContent sx={{flexGrow: 1}}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary">
            {subreddit ? `Posts from ${subreddit}` : 'Select a subreddit from the sidebar'}
        </Typography>
      </CardContent>
      <Divider sx={{borderColor: 'text.primary'}}/>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={title}
        sx={{ width: 1}}
      />
      <Divider sx={{borderColor: 'text.primary'}}/>
      <CardContent sx={{flexGrow: 1}}>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      
      <CardActions>
        <IconButton aria-label="upvote" sx={{marginLeft: 1}}>
          <ArrowUpward />
        </IconButton>
        <IconButton aria-label="downvote" sx={{marginRight: 79}}>
          <ArrowDownward />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;