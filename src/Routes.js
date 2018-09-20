import Homepage from "./pages/Homepage";
import Charts from "./pages/Charts.js";
import AboutUs from "./pages/AboutUs.js";

const routes = [
  {
    path: '/',
    component: Homepage,
    exact: true
  },
  {
    path: '/charts',
    component: Charts
  },
  {
    path: '/aboutus',
    component: AboutUs
  }
]

export default routes;