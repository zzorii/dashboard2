import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

const Title = (props) => {
    return (
        <VStack spacing={4}>
            <Heading as={'h2'}>{props.title}</Heading>
            <Text variant={'txt164'}>{props.desc}</Text>
        </VStack>
    );
};

export default Title;
