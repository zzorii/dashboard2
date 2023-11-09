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
  Progress,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Complex = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Complex Table</Heading>
      </CardHeader>
      <CardBody>
        <TableContainer overflowX={"hidden"} overflowY={"auto"} maxH="296px">
          <ComplexStyle variant="simple">
            <TableCaption>Complex Table</TableCaption>
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
                <Td>
                  <CheckCircleIcon
                    w={4}
                    h={4}
                    color="green.500"
                    style={{ marginRight: "5px" }}
                  />
                  Approved
                </Td>
                <Td>24.Jan.2021</Td>
                <Td>
                  <Progress value={80} />
                </Td>
              </Tr>
              <Tr>
                <Td>Venus Dashboard Builder</Td>
                <Td>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "red",
                      marginRight: "5px",
                    }}
                  />
                  Disable
                </Td>
                <Td>30.Dec.2021</Td>
                <Td>
                  <Progress value={40} />
                </Td>
              </Tr>
              <Tr>
                <Td>Venus Design System</Td>
                <Td>
                  <WarningIcon
                    w={4}
                    h={4}
                    color="yellow.500"
                    style={{ marginRight: "5px" }}
                  />
                  Error
                </Td>
                <Td>20.Nay.2021</Td>
                <Td>
                  <Progress value={85} />
                </Td>
              </Tr>

              <Tr>
                <Td>Uranus</Td>
                <Td>
                  <CheckCircleIcon
                    w={4}
                    h={4}
                    color="green.500"
                    style={{ marginRight: "5px" }}
                  />
                  Approved
                </Td>
                <Td>21.Jul.2021</Td>
                <Td>
                  <Progress value={50} />
                </Td>
              </Tr>
            </Tbody>
          </ComplexStyle>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

const ComplexStyle = styled(Table)`
  height: 260px;
  CheckCircleIcon {
    margin-right: 5px;
  }
`;

export default Complex;
