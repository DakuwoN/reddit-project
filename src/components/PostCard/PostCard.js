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


  return (
    <RouterLink to={`/subreddit/${subreddit}/${postId}`}>
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
        <Link to={`/subreddit/${subreddit}`} target="_blank" rel="noopener noreferrer">
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
            style={{width: '100%', height: '500px', objectFit: 'cover'}}
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
        
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
       
      </CardActions>
    </Card>
    </RouterLink>
  );
}

export default PostCard;