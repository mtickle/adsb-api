import mongoose,{ Schema } from 'mongoose';

const flightViewSchema = new Schema({

    timestamp: {
        required: false,
        type: Date
    },

    hex_code: {
        required: false,
        type: String
    },

    flight: {
        required: false,
        type: String
    },

    alt_baro: {
        required: false,
        type: Number
    },

    lat: {
        required: false,
        type: Number
    },

    lon: {
        required: false,
        type: Number
    },

    name: {
        required: false,
        type: String
    },

    mfr: {
        required: false,
        type: String
    },

    model: {
        required: false,
        type: String
    }

});

export const flightViewModel = mongoose.model("flightview", flightViewSchema);