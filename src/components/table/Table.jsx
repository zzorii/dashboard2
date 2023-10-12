// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // 다른 데이터 항목들...
];

function UserInfoTable() {
    return (
        <Box p="4">
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Age</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.age}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}

export default UserInfoTable;
