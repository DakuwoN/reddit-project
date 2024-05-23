import { Card, Link, CardContent, CardMedia, Typography, Divider, CardActions, IconButton, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward, Comment } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import  ReactMarkDown  from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';


function PostCard({ title, imageUrl, content, subreddit: propSubreddit, postId}) {
  const { subreddit = propSubreddit } = useParams();
  

  const handleImageError = (event) => {
  if (event.target.src !== 'https://www.redditinc.com/assets/images/blog/reddit_header_2023-11-28-222257_hthh.png') {
    event.target.onerror = null;
    event.target.src = 'https://www.redditinc.com/assets/images/blog/reddit_header_2023-11-28-222257_hthh.png';
  }
};

// Don't render the post if there's no image URL
if (!imageUrl) {
  return null;
}
  return (
    <Card sx={{ 
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '90%',
        marginBottom: 2,
      
        marginTop: 4,
        boxShadow: 3,
        '&:hover': {
            border: '2px solid black',
            borderColor: 'black',
        }
    }}>
         
      <CardContent sx={{flexGrow: 1, marginBottom: 2}}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary">
      Posts from{' '}
      {subreddit ? (
        <Link href={`https://www.reddit.com/r/${subreddit}`} target="_blank" rel="noopener noreferrer">
          r/{subreddit}
        </Link>
      ) : (
        'Select a subreddit from the sidebar'
      )}
    </Typography>

     
      </CardContent>
      <Divider sx={{borderColor: 'text.primary'}}/>
      <CardMedia      
        sx={{ width: 1}}
        component={() => (
          <img 
            src={imageUrl}
            onError={handleImageError}
            alt={title}
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
  )}
      />
      <Divider sx={{borderColor: 'text.primary'}}/>

      <CardContent sx={{flexGrow: 1, marginBottom: 2, objectFit: 'cover'}}>
  <ReactMarkDown children={content || 'No content available for this post.'}/>
</CardContent>
      
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex'}}>
        <IconButton aria-label="upvote" sx={{marginLeft: 1}}>
          <ArrowUpward />
        </IconButton>
        <IconButton aria-label="downvote" >
          <ArrowDownward />
        </IconButton>
        </Box>
        <RouterLink to={`/r/${subreddit}/${postId}`}>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
        </RouterLink>
      </CardActions>
    </Card>
  );
}

export default PostCard;