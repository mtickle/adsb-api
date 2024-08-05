import mongoose, { Schema } from "mongoose";

const aircraftSchema = new Schema({
  
icao24 : {
  required: true,
  type: String,
},
registration : {
  required: true,
  type: String,
},
manufacturericao : {
  required: true,
  type: String,
},
manufacturername : {
  required: true,
  type: String,
},
model : {
  required: true,
  type: String,
},
typecode : {
  required: true,
  type: String,
},
serialnumber : {
  required: true,
  type: String,
},
icaoaircrafttype : {
  required: true,
  type: String,
},
owner : {
  required: true,
  type: String,
},
built : {
  required: true,
  type: String,
},
engines : {
  required: true,
  type: String,
},

});

export const aircraftModel = mongoose.model("aircraft", aircraftSchema);
