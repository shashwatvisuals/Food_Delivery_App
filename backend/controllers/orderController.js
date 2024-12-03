// import orderModel from "../models/orderModels.js";
// import userModel from "../models/userModel.js";


// //placing user order from frontend

// const placeOrder = async (req, res) => {

//     const frontend_url = "http://localhost:5173"
//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 currency:"inr",
//                 product_data : {
//                     name:item.name
//                 },
//                 unit_amount: item.price
//             },
//             quantity:item.quantity
//         }))

//         line_items.push({
//             price_data : {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges"
//                 },
//                 unit_amount: 10
//             },
//             quantity:1
//         })

//         const session = await Checkout.session.create({
//             line_items: line_items,
//             mode: 'payment',
//             sucess_url : `${frontend_url}/verify?sucess=true&orderId = ${newOrder._id}`,
//             cancel_url : `${frontend_url}/verify?sucess=false&orderId = ${newOrder._id}`
            
//         })
//         res.json({sucess: true, session_url: session.url})

//     } catch (error) {
//         console.log(error);
//         res.json({sucess:false, message:"Error"})
//     }
// }

// export{placeOrder}




// import orderModel from '../models/orderModels.js';

// export const placeOrder = async (req, res) => {
//   try {
//     const { userId, items, amount, address } = req.body;


//     const existingOrder = await orderModel.findOne({ userId, items, amount, address, status: "Food Processing" });

//     if (existingOrder) {
//       return res.status(409).json({ message: 'Duplicate order detected' });
//     }

//     const order = new orderModel({
//       userId,
//       items,
//       amount,
//       address,
//       status: "Food Processing",
//       payment: true,
//     });

//     await order.save();

//     res.status(201).json({ message: 'Order placed successfully', order });
//   } catch (error) {
//     res.status(500).json({ message: 'Order creation failed', error: error.message });
//   }
// };


import orderModel from '../models/orderModels.js'; // Adjust the path based on your folder structure

export const placeOrder = async (req, res) => {
  const { userId, items, amount, address, payment } = req.body;

  // Calculate total paid (based on amount and payment status)
  const totalPaid = payment ? amount : 0;  // Assuming payment is boolean, you can adjust this logic

  try {
    // Create the order document and save it to the database
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      status: "Food Processing", // Default status
      totalPaid,  // Saving totalPaid in the database
    });

    await newOrder.save();

    return res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({ error: "Error placing order" });
  }
};

