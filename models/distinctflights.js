import mongoose, { Schema } from "mongoose";

const distinctflightsSchema = new Schema({
  _id: {
    required: true,
    type: String,
  },
  FlightCount: {
    required: true,
    type: String,
  }
});

export const distinctflightsModel = mongoose.model("distinctflights", distinctflightsSchema);
