// SubredditPage.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';
import { fetchSubreddit } from '../redux/subredditSlice';

function SubredditPage() {
  const dispatch = useDispatch();
  const { subreddit } = useParams();
  const data = useSelector((state) => state.subreddit.data[subreddit]);
  
  useEffect(() => {
    if (subreddit || subreddit === undefined) {
      dispatch(fetchSubreddit(subreddit || 'news'));
    }
  }, [subreddit, dispatch]);


  return data ? (
    <div>
      {data.map((post) => (
        <PostCard
          key={post.postId}
          title={post.title}
          imageUrl={post.imageUrl}
          content={post.content}
          subreddit={post.subreddit}
          postId={post.postId}
        />
      ))}
    </div>
  ) : null;
}

export default SubredditPage;