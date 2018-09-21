import Homepage from "./pages/Homepage";
import Charts from "./pages/Charts";
import AboutUs from "./pages/AboutUs.js";
import LineChart from "./pages/LineChart.js";
import Feedback from "./pages/Feedback.js";
import FAQ from "./pages/FAQ.js";

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
    path: '/faq',
    component: FAQ
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
  {
    path: '/linechart',
    component: LineChart
  },
  {
    path: '/feedback',
    component: Feedback
  }
]

export default routes;