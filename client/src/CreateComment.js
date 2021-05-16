import { React, useState } from 'react';
import axios from 'axios';

const CreateComment = ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }
    return (
        <div>
            <form className="form-group" onSubmit={onSubmit}>
                <label>Comment</label>
                <input type="text" value={content} onChange={e => setContent(e.target.value)} className="form-control"></input>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreateComment;