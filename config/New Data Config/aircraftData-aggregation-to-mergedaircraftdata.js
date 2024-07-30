function my_aggregate() {

    return db.aircraftData.aggregate(
      [
        {
          $lookup: {
            from: "aircraftManufacturer",
            localField: "mfr_mdl_code",
            foreignField: "code",
            as: "ref",
          },
        },
        {
          $unwind: "$ref",
        },
        {
          $project: {
  
            _id: 1,
            n_number: 1,
            serial_number: 1,
            mode_s_code_hex: 1,
            mfr_mdl_code: 1,
            eng_mfr_mdl: 1,
            year_mfr: 1,
            name: 1,
            mfr: "$ref.mfr",
            model: "$ref.model",
          },
        },
        {
          $out: "mergedaircraftdata",
        },
      ]
    )
  }
  