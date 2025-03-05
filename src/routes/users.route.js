import { Router } from "express";
import usersController from "../controllers/users.controller.js";
const userRoute = Router();

const userController = new usersController();
userRoute.get("/users", (req, res) =>
  userController.addUserController(req, res)
);

userRoute.get("/users/:id", (req, res) =>
  userController.oneUserController(req, res)
);
userRoute.post("/users", (req, res) =>
  userController.addUsersController(req, res)
);
userRoute.put("/users/:id", (req, res) =>
  userController.updateController(req, res)
);
userRoute.delete("/users/:id", (req, res) =>
  userController.deleteUserController(req, res)
);
export default userRoute;
