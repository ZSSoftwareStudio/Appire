import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdApps,
  MdBarChart,
  BsCashStack,
  MdPerson,
  MdMoving,
  MdDashboardCustomize,
  MdSupervisorAccount,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdWeb,
} from "react-icons/md";
import { FaWallet } from "react-icons/fa";
// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/users";
import Profile from "views/admin/profile";
import DataTables from "views/admin/subscription";

import MainWebsite from "views/common/MainWebsite";
// import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

// User Imports
import UserDashboard from "views/user/default";
import UserProfile from "views/user/profile";
import UserDataTables from "views/user/subscription";
import UserWallet from "views/user/wallet";

// App Imports
import LeaderBoard from "./views/appList/leaderBoard";
import AppList from "views/appList/index";
import AppDetails from "views/appList/appDetails";
import AppBlock from "views/appList/ads";
import AppMarket from "views/appList/appMarket";
import Settings from "views/appList/settings";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="28px" height="28px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="28px" height="28px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "/users",
    icon: (
      <Icon
        as={MdSupervisorAccount}
        width="28px"
        height="28px"
        color="inherit"
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Subscription",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="28px" height="28px" color="inherit" />,
    path: "/subcription",
    component: DataTables,
  },
  {
    name: "Main Website",
    layout: "/admin",
    path: "/website",
    icon: <Icon as={MdWeb} width="28px" height="28px" color="inherit" />,
    component: MainWebsite,
  },
  {
    name: "Leaderboard",
    layout: "/admin",
    path: "/leader-board",
    component: LeaderBoard,
    shown: false,
  },
  {
    name: "App Marketplace",
    layout: "/admin",
    path: "/app-market",
    component: AppMarket,
    shown: false,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "/setting",
    component: Settings,
    shown: false,
  },
  {
    name: "User Dashboard",
    layout: "/user",
    path: "/default",
    icon: <Icon as={MdHome} width="28px" height="28px" color="inherit" />,
    component: UserDashboard,
  },
  {
    name: "User Profile",
    layout: "/user",
    path: "/profile",
    icon: <Icon as={MdPerson} width="28px" height="28px" color="inherit" />,
    component: UserProfile,
  },
  {
    name: "User Subscription",
    layout: "/user",
    path: "/subcription",
    icon: (
      <Icon
        as={MdSupervisorAccount}
        width="28px"
        height="28px"
        color="inherit"
      />
    ),
    component: UserDataTables,
  },
  {
    name: "User Wallet",
    layout: "/user",
    path: "/wallet",
    icon: <Icon as={FaWallet} width="28px" height="28px" color="inherit" />,
    component: UserWallet,
  },
  {
    name: "Main Website",
    layout: "/user",
    path: "/website",
    icon: <Icon as={MdWeb} width="28px" height="28px" color="inherit" />,
    component: MainWebsite,
  },
  {
    name: "All Apps",
    layout: "/user",
    path: "/app-list",
    component: AppList,
    shown: false,
  },
  {
    name: "Ads",
    layout: "/user",
    path: "/app-ads",
    component: AppBlock,
    shown: false,
  },
  {
    name: "Swirlion",
    layout: "/user",
    path: "/app-details",
    component: AppDetails,
    shown: false,
  },
  {
    name: "Leaderboard",
    layout: "/user",
    path: "/leader-board",
    component: LeaderBoard,
    shown: false,
  },
  {
    name: "App Marketplace",
    layout: "/user",
    path: "/app-market",
    component: AppMarket,
    shown: false,
  },
  {
    name: "Settings",
    layout: "/user",
    path: "/setting",
    component: Settings,
    shown: false,
  },
  {
    name: "Login",
    layout: "/auth",
    path: "/sign-in/default",
    icon: <Icon as={MdWeb} width="28px" height="28px" color="inherit" />,
    component: SignInCentered,
  },
];

export default routes;
