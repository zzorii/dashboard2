import React from 'react';
import Comment from './Comment';

const CommentContainer = () => {
    const user1 = {
        name: 'John Doe',
        avatarUrl: 'https://example.com/avatar1.jpg',
        // Other user information
    };

    const user2 = {
        name: 'Jane Smith',
        avatarUrl: 'https://example.com/avatar2.jpg',
        // Other user information
    };

    const commentData1 = {
        author: user1,
        text: 'This is a comment from John Doe.',
        date: new Date(),
    };

    const commentData2 = {
        author: user2,
        text: 'This is a comment from Jane Smith.',
        date: new Date(),
    };

    return (
        <>
            <Comment {...commentData1} />
            <Comment {...commentData2} />
        </>
    );
};

export default CommentContainer;
