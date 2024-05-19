import React from 'react'; 
import Header from './components/Header/Header';
import PostCard from './components/PostCard/PostCard';


function App() {
  return (
    <div>
      <Header/>
      <PostCard title="Title" subreddit="r/subreddit" imageUrl="https://source.unsplash.com/random" content="Content"/>
    </div>
  );
}

export default App;
