// src/models/Question.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Mess: { type: String, required: true },
  Status: { type: String, required: true }
}, { collection: 'Test' }); 

const Test = mongoose.model('Test', questionSchema);

export default Test;
