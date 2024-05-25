import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../redux/postSlice'; // Adjust the import based on your file structure
import PostCard from '../components/PostCard/PostCard'; // Import the PostCard component

function PostDetailPage() {
  const dispatch = useDispatch();
  const { subreddit, postId } = useParams();
  const post = useSelector(state => state.posts.post);
  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPost({ subreddit, postId }));
    }
  }, [postStatus, subreddit, postId, dispatch]);
  

  let content;

  if (postStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (postStatus === 'succeeded') {
    // Only render the PostCard component if post is not undefined
    content = post ? <PostCard data={post} /> : <div>No post found</div>;
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
}

export default PostDetailPage;