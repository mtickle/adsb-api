import mongoose, { Schema } from "mongoose";

const aircraftsSchema = new Schema({
  icao24 : {
    required: true,
    type: String,
  },
  timestamp : {
    required: true,
    type: String,
  },
  acars: {
    required: true,
    type: String,
  },
  adsb: {
    required: true,
    type: String,
  },
  built: {
    required: true,
    type: String,
  },
  country : {
    required: true,
    type: String,
  },
  engines : {
    required: true,
    type: String,
  },
  icaoAircraftClass : {
    required: true,
    type: String,
  },
  manufacturerIcao : {
    required: true,
    type: String,
  },
  manufacturerName : {
    required: true,
    type: String,
  },
  model : {
    required: true,
    type: String,
  },
  modes : {
    required: true,
    type: String,
  },
  operatorCallsign : {
    required: true,
    type: String,
  },
  operatorIcao : {
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
