import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import UserLayout from "layouts/user";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";

import AppList from "./views/appList/index";
import AppDetails from "./views/appList/appDetails";
import AppBlock from "./views/appList/ads";
//
import LeaderBoard from "./views/appList/leaderBoard";
import AppMarket from "./views/appList/appMarket";
import Setting from "./views/appList/settings";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/user`} component={UserLayout} />
          <Route path={`/rtl`} component={RTLLayout} />
          <Redirect from="/" to="/admin" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
