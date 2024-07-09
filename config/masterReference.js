

db.masterReference.drop()

db.createView("masterReference", "master",
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
      $project: {
        _id: 0,
        mode_s_code_hex: 1,
        n_number: 1,
        mfr_mdl_code: 1,
        year_mfr: 1,
        name: 1,
        mfr: "$ref.mfr",
        model: "$ref.model",
      },
    },
    {
      $unwind: "$mfr",
    },
    {
      $unwind: "$model",
    },
  ])

