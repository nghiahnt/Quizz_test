import config from "../config";

import { Home } from "../pages/home/home";
import Quizz from "../pages/quizz/Quizz";
import Pass from "../pages/Pass/Pass";
import Review from "../pages/Review/Review";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.quizz, component: Quizz },
  { path: config.routes.pass, component: Pass },
  { path: config.routes.review, component: Review },
];
export default publicRoutes;
