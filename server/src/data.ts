const flightData: {
  flight_id: String;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: {
    depatureAt:string;
    arriveAt:string;
    avaliableSeats:number;
    prices:{
      currency:string;
      adult:number;
      child:number

    }[]
  }[]

}[] = [

   {
        "flight_id": "S83195",
        "depatureDestination": "Stockholm",
        "arrivalDestination": "Oslo",
        "itineraries": [
            {
                "depatureAt": "2022-12-12T12:30:00",
                "arriveAt": "2022-12-12T13:30:00",
                "avaliableSeats": 2,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T15:30:00",
                "arriveAt": "2022-12-12T16:30:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T18:30:00",
                "arriveAt": "2022-12-12T19:30:00",
                "avaliableSeats": 0,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T21:30:00",
                "arriveAt": "2022-12-12T22:30:00",
                "avaliableSeats": 20,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T12:30:00",
                "arriveAt": "2022-12-13T13:30:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T15:30:00",
                "arriveAt": "2022-12-13T16:30:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T18:30:00",
                "arriveAt": "2022-12-13T19:30:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T21:30:00",
                "arriveAt": "2022-12-13T22:30:00",
                "avaliableSeats": 15,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T12:30:00",
                "arriveAt": "2022-12-14T13:30:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T15:30:00",
                "arriveAt": "2022-12-14T16:30:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T18:30:00",
                "arriveAt": "2022-12-14T19:30:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T21:30:00",
                "arriveAt": "2022-12-14T22:30:00",
                "avaliableSeats": 0,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T12:30:00",
                "arriveAt": "2022-12-15T13:30:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T15:30:00",
                "arriveAt": "2022-12-15T16:30:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T18:30:00",
                "arriveAt": "2022-12-15T19:30:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T21:30:00",
                "arriveAt": "2022-12-15T22:30:00",
                "avaliableSeats": 0,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-16T12:30:00",
                "arriveAt": "2022-12-16T13:30:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 500}
                ]
            },
            {
                "depatureAt": "2022-12-16T15:30:00",
                "arriveAt": "2022-12-16T16:30:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2300, "child": 550}
                ]
            },
            {
                "depatureAt": "2022-12-16T18:30:00",
                "arriveAt": "2022-12-16T19:30:00",
                "avaliableSeats": 30,
                "prices": [
                    {"currency": "SEK", "adult": 2330, "child": 550}
                ]
            },
            {
                "depatureAt": "2022-12-16T21:30:00",
                "arriveAt": "2022-12-16T22:30:00",
                "avaliableSeats": 2,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 400}
                ]
            },
            {
                "depatureAt": "2022-12-17T18:30:00",
                "arriveAt": "2022-12-17T19:30:00",
                "avaliableSeats": 3,
                "prices": [
                    {"currency": "SEK", "adult": 3000, "child": 700}
                ]
            },
            {
                "depatureAt": "2022-12-17T21:30:00",
                "arriveAt": "2022-12-17T22:30:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 2300, "child": 400}
                ]
            },
            {
                "depatureAt": "2022-12-18T12:30:00",
                "arriveAt": "2022-12-18T13:30:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 3400, "child": 800}
                ]
            },
            {
                "depatureAt": "2022-12-18T15:30:00",
                "arriveAt": "2022-12-18T16:30:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 3700, "child": 770}
                ]
            },
            {
                "depatureAt": "2022-12-18T18:30:00",
                "arriveAt": "2022-12-18T19:30:00",
                "avaliableSeats": 40,
                "prices": [
                    {"currency": "SEK", "adult": 4000, "child": 800}
                ]
            },
            {
                "depatureAt": "2022-12-18T21:30:00",
                "arriveAt": "2022-12-18T22:30:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2200, "child": 300}
                ]
            }
        ]
    },
    {
        "flight_id": "B83195",
        "depatureDestination": "Oslo",
        "arrivalDestination": "Stockholm",
        "itineraries": [
            {
                "depatureAt": "2022-12-12T11:00:00",
                "arriveAt": "2022-12-12T12:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 1300, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T13:00:00",
                "arriveAt": "2022-12-12T14:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T16:00:00",
                "arriveAt": "2022-12-12T17:00:00",
                "avaliableSeats": 3,
                "prices": [
                    {"currency": "SEK", "adult": 1300, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T22:00:00",
                "arriveAt": "2022-12-12T23:00:00",
                "avaliableSeats": 20,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T14:00:00",
                "arriveAt": "2022-12-13T15:00:00",
                "avaliableSeats": 2,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T14:00:00",
                "arriveAt": "2022-12-14T15:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 2100, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T14:00:00",
                "arriveAt": "2022-12-15T15:00:00",
                "avaliableSeats": 2,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-16T14:00:00",
                "arriveAt": "2022-12-16T15:00:00",
                "avaliableSeats": 9,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-17T14:00:00",
                "arriveAt": "2022-12-17T15:00:00",
                "avaliableSeats": 33,
                "prices": [
                    {"currency": "SEK", "adult": 1800, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-18T14:00:00",
                "arriveAt": "2022-12-18T15:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 1800, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-19T22:00:00",
                "arriveAt": "2022-12-19T23:00:00",
                "avaliableSeats": 2,
                "prices": [
                    {"currency": "SEK", "adult": 3000, "child": 600}
                ]
            }
        ]
    },
    {
        "flight_id": "C83195",
        "depatureDestination": "Oslo",
        "arrivalDestination": "Amsterdam",
        "itineraries": [
            {
                "depatureAt": "2022-12-12T12:30:00",
                "arriveAt": "2022-12-12T14:00:00",
                "avaliableSeats": 12,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T15:30:00",
                "arriveAt": "2022-12-12T17:00:00",
                "avaliableSeats": 15,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T18:30:00",
                "arriveAt": "2022-12-12T20:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T21:30:00",
                "arriveAt": "2022-12-12T23:00:00",
                "avaliableSeats": 20,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T12:30:00",
                "arriveAt": "2022-12-13T14:00:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T15:30:00",
                "arriveAt": "2022-12-13T17:00:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T18:30:00",
                "arriveAt": "2022-12-13T20:00:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T21:30:00",
                "arriveAt": "2022-12-13T23:00:00",
                "avaliableSeats": 15,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T12:30:00",
                "arriveAt": "2022-12-14T14:00:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T15:30:00",
                "arriveAt": "2022-12-14T17:00:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T18:30:00",
                "arriveAt": "2022-12-14T20:00:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T21:30:00",
                "arriveAt": "2022-12-14T23:00:00",
                "avaliableSeats": 0,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T12:30:00",
                "arriveAt": "2022-12-15T14:00:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T15:30:00",
                "arriveAt": "2022-12-15T17:00:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 1500, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T18:30:00",
                "arriveAt": "2022-12-15T20:00:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T21:30:00",
                "arriveAt": "2022-12-15T23:00:00",
                "avaliableSeats": 0,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-16T12:30:00",
                "arriveAt": "2022-12-16T14:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 500}
                ]
            },
            {
                "depatureAt": "2022-12-16T15:30:00",
                "arriveAt": "2022-12-16T17:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2300, "child": 550}
                ]
            },
            {
                "depatureAt": "2022-12-16T18:30:00",
                "arriveAt": "2022-12-16T20:00:00",
                "avaliableSeats": 30,
                "prices": [
                    {"currency": "SEK", "adult": 2330, "child": 550}
                ]
            },
            {
                "depatureAt": "2022-12-16T21:30:00",
                "arriveAt": "2022-12-16T23:00:00",
                "avaliableSeats": 2,
                "prices": [
                    {"currency": "SEK", "adult": 1900, "child": 400}
                ]
            },
            {
                "depatureAt": "2022-12-17T18:30:00",
                "arriveAt": "2022-12-17T20:00:00",
                "avaliableSeats": 3,
                "prices": [
                    {"currency": "SEK", "adult": 3000, "child": 700}
                ]
            },
            {
                "depatureAt": "2022-12-17T21:30:00",
                "arriveAt": "2022-12-17T23:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 2300, "child": 400}
                ]
            },
            {
                "depatureAt": "2022-12-18T12:30:00",
                "arriveAt": "2022-12-18T14:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 3400, "child": 800}
                ]
            },
            {
                "depatureAt": "2022-12-18T15:30:00",
                "arriveAt": "2022-12-18T17:00:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 3700, "child": 770}
                ]
            },
            {
                "depatureAt": "2022-12-18T18:30:00",
                "arriveAt": "2022-12-18T20:00:00",
                "avaliableSeats": 40,
                "prices": [
                    {"currency": "SEK", "adult": 4000, "child": 800}
                ]
            },
            {
                "depatureAt": "2022-12-18T21:30:00",
                "arriveAt": "2022-12-18T23:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2200, "child": 300}
                ]
            }
        ]
    },
    {
        "flight_id": "A83195",
        "depatureDestination": "Amsterdam",
        "arrivalDestination": "Oslo",
        "itineraries": [
            {
                "depatureAt": "2022-12-12T10:30:00",
                "arriveAt": "2022-12-12T12:00:00",
                "avaliableSeats": 12,
                "prices": [
                    {"currency": "SEK", "adult": 2222, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T15:30:00",
                "arriveAt": "2022-12-12T17:00:00",
                "avaliableSeats": 53,
                "prices": [
                    {"currency": "SEK", "adult": 2333, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-12T23:30:00",
                "arriveAt": "2022-12-13T01:00:00",
                "avaliableSeats": 30,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T10:30:00",
                "arriveAt": "2022-12-13T12:00:00",
                "avaliableSeats": 3,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T15:30:00",
                "arriveAt": "2022-12-13T17:00:00",
                "avaliableSeats": 3,
                "prices": [
                    {"currency": "SEK", "adult": 2333, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-13T23:30:00",
                "arriveAt": "2022-12-14T01:00:00",
                "avaliableSeats": 12,
                "prices": [
                    {"currency": "SEK", "adult": 2333, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T10:30:00",
                "arriveAt": "2022-12-14T12:00:00",
                "avaliableSeats": 1,
                "prices": [
                    {"currency": "SEK", "adult": 2333, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T15:30:00",
                "arriveAt": "2022-12-14T17:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2333, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-14T23:30:00",
                "arriveAt": "2022-12-15T01:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2333, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T10:30:00",
                "arriveAt": "2022-12-15T12:00:00",
                "avaliableSeats": 11,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T15:30:00",
                "arriveAt": "2022-12-15T17:00:00",
                "avaliableSeats": 3,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-15T23:30:00",
                "arriveAt": "2022-12-16T01:00:00",
                "avaliableSeats": 50,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 325}
                ]
            },
            {
                "depatureAt": "2022-12-16T10:30:00",
                "arriveAt": "2022-12-16T12:00:00",
                "avaliableSeats": 7,
                "prices": [
                    {"currency": "SEK", "adult": 2000, "child": 500}
                ]
            },
            {
                "depatureAt": "2022-12-16T15:30:00",
                "arriveAt": "2022-12-16T17:00:00",
                "avaliableSeats": 5,
                "prices": [
                    {"currency": "SEK", "adult": 2300, "child": 550}
                ]
            },
            {
                "depatureAt": "2022-12-16T23:30:00",
                "arriveAt": "2022-12-17T01:00:00",
                "avaliableSeats": 30,
                "prices": [
                    {"currency": "SEK", "adult": 2330, "child": 550}
                ]
            },
            {
                "depatureAt": "2022-12-17T12:30:00",
                "arriveAt": "2022-12-17T14:00:00",
                "avaliableSeats": 9,
                "prices": [
                    {"currency": "SEK", "adult": 3333, "child": 900}
                ]
            },
            {
                "depatureAt": "2022-12-17T23:30:00",
                "arriveAt": "2022-12-18T01:00:00",
                "avaliableSeats": 10,
                "prices": [
                    {"currency": "SEK", "adult": 2300, "child": 400}
                ]
            },
            {
                "depatureAt": "2022-12-18T21:30:00",
                "arriveAt": "2022-12-18T23:00:00",
                "avaliableSeats": 33,
                "prices": [
                    {"currency": "SEK", "adult": 4000, "child": 800}
                ]
            }
        ]
    }

  ]

export default flightData;

