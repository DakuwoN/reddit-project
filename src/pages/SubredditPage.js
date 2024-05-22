// SubredditPage.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';
import { fetchSubreddit } from '../redux/subredditSlice';

function SubredditPage() {
  const dispatch = useDispatch();
  const { subreddit } = useParams();
  const data = useSelector((state) => state.subreddit.data);

  useEffect(() => {
    if (subreddit || subreddit === undefined) {
      dispatch(fetchSubreddit(subreddit || 'popular'));
    }
  }, [subreddit, dispatch]);

  return data ? (
    data.map((post, index) => (
      <PostCard
        key={index}
        title={post.title}
        imageUrl={post.imageUrl}
        content={post.content}
      />
    ))
  ) : (
    <p>Select a subreddit from the sidebar</p>
  );
}

export default SubredditPage;