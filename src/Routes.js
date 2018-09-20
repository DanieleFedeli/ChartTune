import Homepage from "./pages/Homepage";
import Charts from "./pages/Charts.js";
import AboutUs from "./pages/AboutUs.js";
import LineChart from "./pages/LineChart.js"

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
  },
  {
    path: '/linechart',
    component: LineChart
  }
]

export default routes;