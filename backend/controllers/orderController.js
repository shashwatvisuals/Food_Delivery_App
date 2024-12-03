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

