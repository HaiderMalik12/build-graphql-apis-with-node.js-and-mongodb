import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  status: {
    type: String,
    enum: ['NEW', 'RELEASED', 'FAILED'],
    default: 'NEW'
  },
  owner: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  }
}, { timestamps: true });
export default mongoose.model('product', ProductSchema);
