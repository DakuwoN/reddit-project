import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from './components/Header/Header';
import PostCard from './components/PostCard/PostCard';
import Sidebar from './components/Sidebar/Sidebar';
import SearchResultsPage from './pages/SearchResultsPage'; // Import SearchResultsPage
import SubredditPage from './pages/SubredditPage';
import PostDetailPage from './pages/PostDetailPage';

// Dummy data
const subreddits = ['subreddit1', 'subreddit2', 'subreddit3'];

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Routes>
              <Route path="/r/:subreddit" element={<PostCard />} />
              <Route path="/search" element={<SearchResultsPage />} /> {/* Add this line */}
              <Route path="/popular" element={<SubredditPage />} />
              <Route path="/r/:subreddit/:postId" element={<PostDetailPage />} />
              <Route path="/" element={<Navigate to="/r/popular" />} /> {/* Default route */}
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </Grid>
          <Grid item xs={4}>
            <Sidebar subreddits={subreddits} />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;