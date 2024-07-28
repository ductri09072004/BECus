// src/models/Question.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  Time: { type: String, required: true }
}, { collection: 'Service' }); 

const Service = mongoose.model('Service', questionSchema);

export default Service;
