import React from 'react';
import Title from '../components/title/Tilte';
import History from '../components/title/History';
import { Box } from '@chakra-ui/react';

const Tables = () => {
    return (
        <>
            <Box pl="10px">
                <History />
                <Title title="Tables" desc="이 페이지는 tables 페이지 입니다." />
            </Box>
        </>
    );
};

export default Tables;
