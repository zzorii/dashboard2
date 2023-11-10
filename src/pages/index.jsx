import React from "react";
import Layout from "../components/layout/Layout";
import { SimpleGrid } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout title="DashBoard" pagename="DashBoard">
      <SimpleGrid></SimpleGrid>
    </Layout>
  );
};

export default Home;
