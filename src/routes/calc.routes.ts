import { Router } from "express";
import { calcController } from "../controllers/calc.controller.ts";
import { checkParams } from "../middleware/checkParams.ts";

const calcRouter = Router();

calcRouter.get("/:operation/:a/:b", checkParams, calcController);
calcRouter.post("/:operation/", checkParams, calcController);
calcRouter.get("/:operation", checkParams, calcController);

export default calcRouter;