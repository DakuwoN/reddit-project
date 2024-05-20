// SubredditPage.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSubreddit } from './subredditSlice';
import PostCard from './PostCard';

function SubredditPage() {
  const dispatch = useDispatch();
  const { subreddit } = useParams();
  const data = useSelector((state) => state.subreddit.data);

  useEffect(() => {
    if (subreddit) {
      dispatch(fetchSubreddit(subreddit));
    }
  }, [subreddit, dispatch]);

  return data ? (
    <PostCard
      title={data.title}
      imageUrl={data.imageUrl}
      content={data.content}
    />
  ) : (
    <p>Select a subreddit from the sidebar</p>
  );
}

export default SubredditPage;