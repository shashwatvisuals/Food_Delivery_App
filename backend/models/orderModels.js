import mongoose from "mongoose";
// import Payment from "../../frontend/src/pages/Payment";

const orderSchema = new mongoose.Schema({
    userId:{type:String},
    items:{type:Array},
    amount:{type:Number},
    address:{type:Object},
    status:{type:String, default:"Food Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean, default:true},
})

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);
export default orderModel;
