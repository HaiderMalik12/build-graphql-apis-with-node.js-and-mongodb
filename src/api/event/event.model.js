import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: 'String',
    enum: ['CONFERENCE', 'FESTIVAL', 'CONCERT'],
    default: 'CONCERT'
  },
  startsAt: {
    type: String
  },
  endsAt: {
    type: String
  },
  venue: {
    type: String,
    required: true
  },
  minAgeRestriction: {
    type: Number
  },
  performers: { type: [String] },
  speakers: { type: [String] },
  workshops: { type: [String] },
  performingBand: { type: String }
});
export default mongoose.model('event', EventSchema);
