[
    {
        $addFields: {
            hex_code_lower: {
                $toLower: "$hex_code"
            }
        }
    },
    {
        $match: {
            hex_code_lower: {
                $exists: true,
                $nin: [null, "None", "", '""'],
            },
        },
    },
    {
        $group: {
            _id: "$hex_code_lower",
            icao24: { $last: "$hex_code_lower" }
        },
    },
    {
        $merge:
            { into: "uniqueicao24", on: "icao24", whenMatched: "keepExisting", whenNotMatched: "insert" }
    }




]