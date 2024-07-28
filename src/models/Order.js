// src/models/Question.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  Address: { type: String, required: true },
  Code: { type: String, required: false },
  Detail: { type: String, required: true },
  Price: { type: Number, required: false },
  ReceiverName: { type: String, required: true },
  SDT: { type: Number, required: true },
  Status: { type: String, required: false },
  KL: { type: Number, required: true },
  SL: { type: Number, required: true },
  Width: { type: Number, required: true },
  Height: { type: Number, required: true },
  Length: { type: Number, required: true },
  Note: { type: String, required: true },
  driverID: { type: String, required: false },
}, { collection: 'Order' });

const Order = mongoose.model('Order', questionSchema);

export default Order;
