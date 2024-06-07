import { Card, Link, CardContent, CardMedia, Typography, Divider, CardActions, IconButton, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward, Comment } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import ReactMarkDown from 'react-markdown';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch } from 'react-redux';  // Import useDispatch
import { fetchPostDetails } from '../redux/postDetailsSlice'; // Import fetchPost (adjust path if needed)



function PostDetail({ title,  content, subreddit: propSubreddit,  comments = [], votes }) {
  const { subreddit, postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(state => state.postDetails.status); // Get the status from the store (loading, succeeded, failed

  const { post = {}, error } = useSelector(state => state.postDetails); // Default to empty object
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    dispatch(fetchPostDetails({ subreddit, postId }));
  }, [dispatch, subreddit, postId]);

  useEffect(() => {
    if (post && post.id === postId) {
      setImageUrl(post?.url); // Use optional chaining to access post.url
    } else if (error) {
      console.error('Error fetching post details:', error);
      navigate(-1);
    }
  }, [post, postId, error, navigate]);

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = 'https://www.redditinc.com/assets/images/blog/reddit_header_2023-11-28-222257_hthh.png'; // Replace with your default image URL
  };

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
      <CardContent sx={{ flexGrow: 1, marginBottom: 2 }}>
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
        <Typography color="text.secondary">
          Votes: {votes}
        </Typography>
        <Typography color="text.secondary">
          Comments: {comments ? comments.length : 0}
        </Typography>
        {comments && comments.map((comment, index) => (
  <Typography key={index} color="text.secondary">
    {comment}
  </Typography>
))}
      </CardContent>
      <Divider sx={{ borderColor: 'text.primary' }} />
      {imageUrl && (
      <CardMedia
        component="img"
        onError={handleImageError}
        src={imageUrl}
        alt={post?.title || 'Post Image'}
        sx={{ objectFit: 'cover', maxHeight: 500 }}
      />
    )}
      <Divider sx={{ borderColor: 'text.primary' }} />
      <CardContent sx={{ flexGrow: 1, marginBottom: 2, objectFit: 'cover' }}>
        <ReactMarkDown children={content || 'No content available for this post.'} />
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="div">
          Comments
        </Typography>
        {comments.map((comment, index) => (
          <Typography key={index} color="text.secondary">
            {comment}
          </Typography>
        ))}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <IconButton aria-label="upvote" sx={{ marginLeft: 1 }}>
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
  );
}

export default PostDetail;