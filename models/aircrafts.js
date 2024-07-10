import mongoose, { Schema } from "mongoose";

const aircraftsSchema = new Schema({
  n_number: {
    required: true,
    type: String,
  },
  owner : {
    required: true,
    type: String,
  },
  regUntil : {
    required: true,
    type: String,
  },
  registration : {
    required: true,
    type: String,
  },
  serialNumber : {
    required: true,
    type: String,
  },
  typecode : {
    required: true,
    type: String,
  },
  vdl: {
    required: true,
    type: String,
  },


});

export const aircraftsModel = mongoose.model("aircrafts", aircraftsSchema);
