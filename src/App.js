import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SearchResultsPage from './pages/SearchResultsPage'; // Import SearchResultsPage
import SubredditPage from './pages/SubredditPage';
import PostDetailPage from './pages/PostDetailPage';

const subreddits = ['Sports', 'Food', 'Programming', 'React', 'Redux', 'Travel', 'Art', 'Music', 'Funny'];

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Routes>
              <Route path="/subreddit/:subreddit" element={<SubredditPage />} />
              <Route path="/search" element={<SearchResultsPage />} /> {/* Add this line */}
              <Route path="/popular" element={<SubredditPage />} />
              <Route path="/subreddit/:subreddit/:postId" element={<PostDetailPage />} />
              <Route path="/" element={<Navigate to="/popular" />} /> {/* Default route */}
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