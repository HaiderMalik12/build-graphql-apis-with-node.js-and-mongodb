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
  owner: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  }
});
export default mongoose.model('product', ProductSchema);
