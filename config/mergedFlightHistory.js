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
        from: "aircrafts",
        localField:  "hex_code_lower",
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
        model: "$ref.model",
        operator: "$ref.operator",
        registration: "$ref.registration",
        manufacturerName: "$ref.manufacturerName",
        operatorCallsign: "$ref.operatorCallsign",
        owner: "$ref.owner"
      },
    },
   {
         $out: "mergedflighthistory",
     },
]