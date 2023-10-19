import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const Tables = () => {
    return (
        <Grid flexGrow={'1'} templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem bg="yellow" />
            <GridItem bg="papayawhip" />
            <GridItem bg="blue" />
            <GridItem bg="tomato" />
        </Grid>
    );
};

export default Tables;
