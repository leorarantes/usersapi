import {Router} from "express";

import { get, create } from "../controllers/usersController.js";
import userSchema from "../schemas/userSchema.js";
import validateSchema from "../middlewares/validateSchema.js";

const usersRouter = Router();

usersRouter.get('/users', get);
usersRouter.post('/users', validateSchema(userSchema), create);

export default usersRouter;