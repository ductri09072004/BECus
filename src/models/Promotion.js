import mongoose from "mongoose";


const questionSchema = new mongoose.Schema({
  Discount: { type: Number, required: false },
  Name: { type: String, required: true },
  PriceOn: { type: Number, required: true }
},{ collection: 'Promotion' });

const Promotion = mongoose.model('Promotion', questionSchema);

export default Promotion;
