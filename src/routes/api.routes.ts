import { Router } from "express";
import { checkPwd, encrypt, decrypt } from "../middleware/index.ts"
import * as auth from "../controllers/user.controller.ts"

const apiRouter = Router();

apiRouter.post('/signup', checkPwd, encrypt, auth.addUser);
apiRouter.post('/login', encrypt, auth.getUser);

export default apiRouter;