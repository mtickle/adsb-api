
db.pastflights.drop()

db.createView("pastflights", "flights",
  [
    {
      $lookup: {
        from: "masterReference",
        localField: "hex_code",
        foreignField: "mode_s_code_hex",
        as: "result",
      },
    },
    { $sort: { timestamp: -1 } },
    {
      $project: {
        _id: 0,
        timestamp: 1,
        flight_time: 1,
        flight_date: 1,
        lat: 1,
        lon: 1,
        alt_baro: 1,
        hex_code: 1,
        flight_code: 1,
        name: "$result.name",
        mfr: "$result.mfr",
        model: "$result.model",
      },
    },
    {
      $unwind: "$mfr",
    },
    {
      $unwind: "$model",
    },
    {
      $unwind: "$name",
    },
  ])

