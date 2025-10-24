import { Router } from "express";
import { checkPwd, encrypt, decrypt } from "../middleware/index.ts"
import * as auth from "../controllers/user.controller.ts"
import { staticPage } from "../controllers/static.controller.ts";
import { app } from "../models/app.config.ts";

const apiRouter = Router();

apiRouter.get('/login', (req, res) => res.render('login'));
apiRouter.get('/signup', (req, res) => res.render('signup'));
apiRouter.post('/signup', checkPwd, encrypt, auth.addUser);
apiRouter.post('/login', auth.getUser, decrypt);
apiRouter.get('/home', (req, res) => {
    console.log(res);
    res.json(req.params)
})
apiRouter.get('{:id}', (req, res) => res.render('index', {
    app
}))

export default apiRouter;