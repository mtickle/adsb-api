import mongoose, { Schema } from "mongoose";

const uniqueflightsSchema = new Schema({
  _id: {
    required: true,
    type: String,
  },
  Flight: {
    required: true,
    type: String,
  },
  HexCode: {
    required: true,
    type: String,
  },
  Model: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  registration: {
    required: true,
    type: String,
  },
  manufacturerName: {
    required: true,
    type: String,
  },
  operator: {
    required: true,
    type: String,
  },
  operatorCallSign: {
    required: true,
    type: String,
  },
  FlightCount: {
    required: true,
    type: String,
  },


});

export const uniqueflightsModel = mongoose.model("uniqueflights", uniqueflightsSchema);
