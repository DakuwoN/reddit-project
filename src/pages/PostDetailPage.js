import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../redux/postDetailsSlice';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function PostDetail() {
  const { subreddit, postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post);

  useEffect(() => {
    dispatch(fetchPostDetails({subreddit, postId}));
  }, [dispatch, subreddit, postId]);

  // Check if post is not null before trying to access its properties
  if (!post) {
    return <div>Loading...</div>;
  }

  // Render the post details...
  return (
    <Card>
      <CardMedia
        component="img"
        alt={post.title}
        height="140"
        image={post.imageUrl}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Subreddit: {post.subreddit}
        </Typography>
        {/* ...other post properties... */}
      </CardContent>
    </Card>
  );
}

export default PostDetail;