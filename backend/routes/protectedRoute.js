import express from "express";
import authenticate from "../middleware/protectMiddleware.js";

const protectedRouter = express.Router();


protectedRouter.get("/", authenticate, (req, res) => {
  res.json({
    message: "Welcome to the protected route!",
    user: { id: req.user._id, name: req.user.name, email: req.user.email },
  });
});

export default protectedRouter;
