import { React } from 'react';

const CommentList = ({ comments }) => {
    const displayComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved')
            content = comment.content;
        if (comment.status === 'rejected')
            content = "This commend has been rejected";
        if (comment.status === 'pending')
            content = 'Comment is waiting for moderation';
        return (
            <li key={comment.content}>{content}</li>
        )
    });

    return (
        <div>
            <ul>{displayComments}</ul>
        </div>
    );
};

export default CommentList;