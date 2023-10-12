import React from 'react';

function Avatar({ user }) {
    const { avatarUrl, name } = user;
    return <img className="avatar" src={avatarUrl} alt={name} />;
}

export default Avatar;
