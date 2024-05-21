// SearchResultsPage.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchResults } from '../redux/searchSlice';
import PostCard from '../components/PostCard/PostCard';

function SearchResultsPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const data = useSelector((state) => state.search.data);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return data ? (
    data.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        imageUrl={post.imageUrl}
        content={post.content}
      />
    ))
  ) : (
    <p>Enter a search query in the header</p>
  );
}

export default SearchResultsPage;