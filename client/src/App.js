import React from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

const App = () => {
    return (
        <div className="container">
            Test 
            <CreatePost/>
            <hr />
            Post List
            <PostList />
        </div>
    );
};

export default App;