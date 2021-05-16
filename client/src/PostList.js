import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CreateComment from './CreateComment';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const response = await axios.get('http://posts.com/posts');
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const displayPosts = Object.values(posts).map(post => {
        return (
            <div className="card"
                style={{ width: '30%', marginBottom: '20px' }}
                key={post.title}>

                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments}/>
                    <CreateComment postId={post.id}/>
                </div>
            </div>
        )
    });

    return (
        <div>
            {displayPosts}
        </div>
    );
};

export default PostList;