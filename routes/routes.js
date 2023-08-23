//--- Notes
//---- 9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
import { usersModel } from "../models/users.js";
import { flightsModel } from "../models/flights.js"

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

router.get("/getAllFlights", auth.checkKey, async (req, res) => {

  const recordLimit = req.query.limit || 10

  try {
    const data = await flightsModel.find().limit(recordLimit).sort({ dateArr: -1, timeArr: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/postFlight", auth.checkKey, async (req, res) => {
  const data = new flightsModel({
    hex: req.body.Hex,
    ttype: req.body.Type,
    flight: req.body.Flight,
    alt_baro: req.body.AltBaro,
    alt_geom: req.body.AltGeom,
    gs: req.body.Gs,
    track: req.body.Track,
    baro_rate: req.body.BaroRate,
    squawk: req.body.Squawk,
    emergency: req.body.Emergency,
    category: req.body.Category,
    lat: req.body.Lat,
    lon: req.body.Lon,
    nic: req.body.Nic,
    rc: req.body.Rc,
    seen_pos: req.body.SeenPos,
    r_dst: req.body.RDst,
    r_dir: req.body.RDir,
    version: req.body.Version,
    nic_baro: req.body.NicBaro,
    nac_p: req.body.NacP,
    nac_v: req.body.NacV,
    sil: req.body.Sil,
    sil_type: req.body.SilType,
    gva: req.body.Gva,
    sda: req.body.Sda,
    alert: req.body.Alert,
    spi: req.body.Spi,
    mlat: req.body.Mlat,
    tisb: req.body.Tisb,
    messages: req.body.Messages,
    seen: req.body.Seen,
    rssi: req.body.Rssi
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



export default router;
