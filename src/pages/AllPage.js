import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/allSlice';
import PostCard from '../components/PostCard/PostCard';

function AllPage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.all.posts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          imageUrl={post.url}
          content={post.selftext}
          subreddit={post.subreddit}
          postId={post.id}
        />
      ))}
    </div>
  );
}

export default AllPage;