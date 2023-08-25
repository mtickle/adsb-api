import mongoose,
{ Schema } from 'mongoose';

const flightsSchema = new Schema({

  timestamp: {
    required: false,
    type: Date  
  },

  hex: {
    required: false,
    type: String
  },

  ttype: {
    required: false,
    type: String
  },

  flight: {
    required: false,
    type: String
  },

  alt_baro: {
    required: false,
    type: String
  },

  alt_geom: {
    required: false,
    type: String
  },

  gs: {
    required: false,
    type: String
  },

  track: {
    required: false,
    type: String
  },

  baro_rate: {
    required: false,
    type: String
  },

  squawk: {
    required: false,
    type: String
  },

  emergency: {
    required: false,
    type: String
  },

  category: {
    required: false,
    type: String
  },

  lat: {
    required: false,
    type: String
  },

  lon: {
    required: false,
    type: String
  },

  nic: {
    required: false,
    type: String
  },

  rc: {
    required: false,
    type: String
  },

  seen_pos: {
    required: false,
    type: String
  },

  r_dst: {
    required: false,
    type: String
  },

  r_dir: {
    required: false,
    type: String
  },

  version: {
    required: false,
    type: String
  },

  nic_baro: {
    required: false,
    type: String
  },

  nac_p: {
    required: false,
    type: String
  },

  nac_v: {
    required: false,
    type: String
  },

  sil: {
    required: false,
    type: String
  },

  sil_type: {
    required: false,
    type: String
  },

  gva: {
    required: false,
    type: String
  },

  sda: {
    required: false,
    type: String
  },

  alert: {
    required: false,
    type: String
  },

  spi: {
    required: false,
    type: String
  },

  mlat: {
    required: false,
    type: String
  },

  tisb: {
    required: false,
    type: String
  },

  messages: {
    required: false,
    type: String
  },

  seen: {
    required: false,
    type: String
  },

  rssi: {
    required: false,
    type: String
  },


});

export const flightsModel = mongoose.model("flights",  flightsSchema);
