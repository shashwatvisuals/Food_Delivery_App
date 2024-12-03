import exprss from "express"
import { placeOrder } from "../controllers/orderController.js"


const orderRouter = exprss.Router();

orderRouter.post("/place", placeOrder);


export default orderRouter;