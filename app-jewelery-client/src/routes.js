
import Dashboard from "./views/Dashboard.js";
import UserProfile from "./views/UserProfile.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import Icons from "./views/Icons.js";
import Maps from "./views/Maps.js";
import Notifications from "./views/Notifications.js";
import Upgrade from "./views/Upgrade.js";
import Jewelery from "./pages/Jewelery";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Log out",
    icon: "nc-icon nc-close-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/admin/users",
    name: "Users",
    icon: "fa fa-users",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/admin/workers",
    name: "Workers",
    icon: "fa fa-users",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/admin/jewelery",
    name: "Jewelery",
    icon: "fa fa-ring",
    component: Jewelery,
    layout: "/admin",
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
