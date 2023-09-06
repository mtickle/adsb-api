
db.distinctflights.drop()

db.createView("distinctflights", "flights",

[
    {
        $match: {
            flight: {
                $exists: true,
                $nin: [null, "None", "", '""'],
            },
        },
    },
    {
        $group: {
            _id: "$flight",
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
    //     $out: "distinctflight",
    // },
])