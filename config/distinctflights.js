
db.distinctflights.drop()

db.createView("distinctflights", "flights",

[
    {
        $match: {
            flight_code: {
                $exists: true,
                $nin: [null, "None", "", '""'],
            },
        },
    },

    {
        $group: {
            _id: "$flight_code",
            LastSeen: { $last : "$timestamp" },
            HexCode: { $last : "$hex_code"},
            FlightCount: {
                $count: {},
            },
        },
    },

    {
        $sort: {
            FlightCount: -1,
        },
    },
    // {
    //     $out: "distinctflights",
    // },
])