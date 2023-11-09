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
  Checkbox,
} from "@chakra-ui/react";

const Check = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Check Table</Heading>
      </CardHeader>
      <CardBody py={2} px={5}>
        <TableContainer overflowX={"hidden"} overflowY={"auto"} maxH="296px">
          <Table variant="simple">
            <TableCaption>Check Table</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Marketplace
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    defaultChecked
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus PRO
                </Td>
                <Td>10.8%</Td>
                <Td>1.485</Td>
                <Td isNumeric>12.Jun.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    defaultChecked
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Uranus Kit
                </Td>
                <Td>21.3%</Td>
                <Td>1.024</Td>
                <Td isNumeric>5.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    defaultChecked
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus DS
                </Td>
                <Td>31.5%</Td>
                <Td>858</Td>
                <Td isNumeric>7.Mar.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox
                    style={{ marginRight: "5px", borderColor: "#A3AED0" }}
                  ></Checkbox>
                  Venus 3S Asset
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>7.Dec.2021</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Check;
