import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import styled from "styled-components";

const Column = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">4-Column Table</Heading>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <ColumnStyle variant="simple">
            <TableCaption>4-Column Table</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marketplace</Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>Venus PRO</Td>
                <Td>10.8%</Td>
                <Td>1.485</Td>
                <Td>12.Jun.2021</Td>
              </Tr>
              <Tr>
                <Td>Uranus Kit</Td>
                <Td>21.3%</Td>
                <Td>1.024</Td>
                <Td>5.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>Venus Ds</Td>
                <Td>31.5%</Td>
                <Td>858</Td>
                <Td>7.Mar.2021</Td>
              </Tr>
              <Tr>
                <Td>Venus 3D Asset</Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td>17.Dec.2021</Td>
              </Tr>
            </Tbody>
          </ColumnStyle>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

const ColumnStyle = styled(Table)`
  height: 260px;
`;

export default Column;
