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
    $out: "uniqueFlights"
  }
]


find military:
{registration : /2.*-.*/}
{registration : /1.*-.*/}