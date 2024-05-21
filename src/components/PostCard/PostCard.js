import { Card, CardContent, CardMedia, Typography, Divider, CardActions, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward, Comment } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import  ReactMarkDown  from 'react-markdown';

function PostCard({ title, imageUrl, content, subreddit: propSubreddit}) {
  const { subreddit = propSubreddit } = useParams();
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
        <ReactMarkDown source={content}/>
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