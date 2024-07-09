import mongoose, { Schema } from "mongoose";

const aircraftsSchema = new Schema({
  n_number: {
    required: true,
    type: String,
  },
  mfr_mdl_code: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: String,
  },
  owner_name: {
    required: true,
    type: String,
  },
  mode_s_code_hex: {
    required: true,
    type: String,
  },
  mfr: {
    required: true,
    type: String,
  },
  model: {
    required: true,
    type: String,
  },

});

export const aircraftsModel = mongoose.model("aircrafts", aircraftsSchema);
