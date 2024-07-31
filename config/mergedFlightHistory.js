[


  {
    $addFields: {
      hex_code_lower: {
        $toLower: "$hex_code"
      }
    }
  },
  {
    $lookup: {
      from: "aircraft",
      localField: "hex_code_lower",
      foreignField: "icao24",
      as: "ref",
    },
  },
  {
    $unwind: "$ref",
  },
  {
    $project: {
      _id: 1,
      hex_code: "$hex_code_lower",
      flight: 1,
      flight_time: 1,
      registration: 1,
      manufacturericao: "$ref.manufacturericao",
      manufacturername: "$ref.manufacturername",
      model: "$ref.model",
      typecode: "$ref.typecode",
      serialnumber: "$ref.serialnumber",
      icaoaircrafttype: "$ref.icaoaircrafttype",
      operatorcallsign: "$ref.operatorcallsign",
      operatoricao: "$ref.operatoricao",
      owner: "$ref.owner",
      engines: "$ref.engines"
    },
  },
  {
    $out: "mergedflighthistory",
  },
]