import { React, useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://posts.com/posts/create', {
            title
        });

        setTitle('');
    }
    return (
        <div>
            <h1>Create Post</h1>
            <form className="form-group" onSubmit={onSubmit}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control"></input>
                    <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;