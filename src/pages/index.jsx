import React from "react";
import { MoonIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Flex,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import MiniStatistics from "../components/home/MiniStatistics";
import IconBox from "../components/icons/IconBox";
import LineChart from "../components/charts/LineChart";
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
} from "../components/charts/ChartData";
import ApexChart from "../components/charts/Column";

const boxBg = "secondary.500";

const Home = () => {
  return (
    <Layout title="DashBoard" pagename="DashBoard">
      {/*  columns={{ sm: 1, md: 2, lg: 3, '2xl': 6 }} */}
      <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={"20px"}>
        <MiniStatistics
          name="Earnings"
          value="$350.4"
          startCont={<IconBox bg={boxBg} icon={<MoonIcon />} />}
        />
        <MiniStatistics
          name="Spend this month"
          value="$642.39"
          startCont={
            <IconBox w="20px" h="20px" bg={boxBg} icon={<MoonIcon />} />
          }
        />
        <MiniStatistics name="Sales" value="$574.34" growth="+23%" />
        <MiniStatistics
          name="Your balance"
          value="$1,000"
          endCont={
            <Flex
              w={"56px"}
              h={"56px"}
              bg={"gray.100"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
            >
              <MoonIcon />
            </Flex>
          }
        />
        <MiniStatistics name="New Tasks" value="154" />
        <MiniStatistics name="Total Projects" value="2935" />
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} spacing={"20px"} mt={"20px"}>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>
          <CardBody>
            <LineChart
              chartData={lineChartDataOverallRevenue}
              chartOptions={lineChartOptionsOverallRevenue}
            />
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <ApexChart />
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
