import React from 'react';
import Title from '../../components/title/Tilte';
import UserInfoTable from '../../components/table/Table';

const About = () => {
    return (
        <div>
            <Title title="소개" desc="이 페이지는 소개 페이지입니다." />
            <UserInfoTable />
        </div>
    );
};

export default About;
