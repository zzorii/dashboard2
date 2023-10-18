import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from '@reach/router';
import { VStack, Heading, Text } from '@chakra-ui/react';

const Title = (props) => {
    return (
        <VStack spacing={4}>
            <Heading as={'h2'}>{props.title}</Heading>
            <Text variant={'text164'}>{props.desc}</Text>
        </VStack>
    );
};

export default Title;
