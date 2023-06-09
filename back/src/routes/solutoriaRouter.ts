import { Router } from "express";

import {
  indicators,
  listIndicators,
  insertIndicators,
  updateIndicators,
} from "../controllers/solutoria";

const SolutoriaRouter = Router();

SolutoriaRouter.get("/indicators", indicators);
SolutoriaRouter.get("/listIndicators", listIndicators);
SolutoriaRouter.post("/insertIndicators", insertIndicators);
SolutoriaRouter.post("/updateIndicators", updateIndicators);
SolutoriaRouter.post("/deleteIndicators", updateIndicators);

export default SolutoriaRouter;
