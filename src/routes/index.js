import config from "../config";

import { Home } from "../pages/home/home";
import Quizz from "../pages/quizz/Quizz";
import Pass from "../pages/Pass/Pass";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.quizz, component: Quizz },
  { path: config.routes.pass, component: Pass },
];
export default publicRoutes;
