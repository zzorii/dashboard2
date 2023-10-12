import React from 'react';
import { formatDate } from './UtilityFunctions';
import UserInfo from './UserInfo';

function Comment(user) {
    const { author, text, date } = user;
    return (
        <div className="comment">
            <UserInfo user={author} />
            <div className="comment-text">{text}</div>
            <div className="comment-date">{formatDate(date)}</div>
        </div>
    );
}

export default Comment;
