import React from 'react';
import Title from '../components/title/Tilte';
import Comment from '../components/comment';

const Home = () => {
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
        <div>
            <Title title="홈" desc="이 페이지는 메인 페이지입니다." />

            <div className="commentt">
                <Comment {...commentData1} />
                <Comment {...commentData2} />
            </div>
        </div>
    );
};

export default Home;
