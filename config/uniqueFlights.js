[
  {
    $match: {
      flight: {
        $exists: true,
        $nin: [null, "None", "", '""']
      }
    }
  },
  {
    $group: {
      _id: "$flight",
      Flight: {
        $last: "$flight"
      },
      HexCode: {
        $last: "$hex_code"
      },
      Model: {
        $last: "$model"
      },
      registration: {
        $last: "$registration"
      },
      category: {
        $last: "$category"
      },
      manufacturerName: {
        $last: "$manufacturerName"
      },
      operator: {
        $last: "$operator"
      },
      operatorCallSign: {
        $last: "$operatorCallSign"
      },
      FlightCount: {
        $count: {}
      }
    }
  },
  {
    $out: "uniqueflights"
  }
]


find military:
{registration : /2.*-.*/}
{registration : /1.*-.*/}