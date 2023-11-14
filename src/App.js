import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";
import theme from "./theme/";
import MarketPlace from "./pages/MarketPlace";
import Tables from "./pages/Tables";
import Kanban from "./pages/Kanban";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route basename={process.env.PUBLIC_URL} path="/" element={<Home />} />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/marketplace"
          element={<MarketPlace />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/tables"
          element={<Tables />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/kanban"
          element={<Kanban />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/profile"
          element={<Profile />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/signin"
          element={<SignIn />}
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
