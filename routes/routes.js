//--- Notes
//---- 8aBTsqrZuPRWRbV6tnoDI4pZ6HA5570r is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
import { usersModel } from "../models/users.js";
import { flightsModel } from "../models/flights.js"
import { flightViewModel } from "../models/flightView.js";
import { distinctflightsModel } from "../models/distinctflights.js";
import { aircraftsModel } from "../models/aircrafts.js";
import { uniqueflightsModel } from "../models/uniqueflights.js";



//--- Helpers
import auth from "../middlewares/auth.js";
import { Router } from "express";
const router = Router();
import randomstring from "randomstring";



//--- USERS
router.post("/postUser", async (req, res) => {
  const data = new usersModel({
    username: req.body.username,
    apiKey: randomstring.generate(),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getaircrafts/:icao24", auth.checkKey,async (req, res) => {

  try {
    //const data = await aircraftsModel.findById(req.params.icao24);
    const data = await aircraftsModel.find({ icao24: req.params.icao24});
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

router.get("/getAllUsers", auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10

  try {
    const data = await usersModel.find().limit(recordLimit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllDistinctFlights", auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10

  try {
    const data = await distinctflightsModel.find().limit(recordLimit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllFlightViews", auth.checkKey, async (req, res) => {

  const recordLimit = req.query.limit || 10

  try {
    const data = await flightViewModel.find().limit(recordLimit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllUniqueFlights", auth.checkKey, async (req, res) => {

  const recordLimit = req.query.limit || 100

  try {
    const data = await uniqueflightsModel.find().limit(recordLimit).sort({ FlightCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllFlights", auth.checkKey, async (req, res) => {

  const recordLimit = req.query.limit || 10

  try {
    const data = await flightsModel.find().limit(recordLimit).sort({ flight_time: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/postFlight", auth.checkKey, async (req, res) => {

  const data = new flightsModel({
    flight_time: req.body.flight_time,
    flight: req.body.flight,
    hex_code: req.body.hex_code,
    type_code: req.body.type_code,
    flight_code: req.body.flight_code,
    alt_baro: req.body.alt_baro,
    alt_geom: req.body.alt_geom,
    gs: req.body.gs,
    track: req.body.track,
    baro_rate: req.body.baro_rate,
    squawk: req.body.squawk,
    emergency: req.body.emergency,
    category: req.body.category,
    lat: req.body.lat,
    lon: req.body.lon,
    nic: req.body.nic,
    rc: req.body.rc,
    seen_pos: req.body.seen_pos,
    r_dst: req.body.r_dst,
    r_dir: req.body.r_dir,
    version: req.body.version,
    nic_baro: req.body.nic_baro,
    nac_p: req.body.nac_p,
    nac_v: req.body.nac_v,
    sil: req.body.sil,
    sil_type: req.body.sil_type,
    gva: req.body.gva,
    sda: req.body.sda,
    alert: req.body.alert,
    spi: req.body.spi,
    mlat: req.body.mlat,
    tisb: req.body.tisb,
    messages: req.body.messages,
    seen: req.body.seen,
    rssi: req.body.rssi
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
});

export default router;
