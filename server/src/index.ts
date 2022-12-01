import express, { Request, Response, Application } from "express"
import flightData from "./data"
const cors = require('cors')



const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(cors({ credentials: true }))

interface FlightInfo {
    arrivalDestination: string;
    arriveAt: string;
    avaliableSeats: string;
    depatureAt: string
    depatureDestination: string;
    passengerAdult: string;
    passengerChild: string;
    trip: string;
}

let SearchFlight: any = []



// -----------------search new flight-----------------------

app.post('/flight', (req: Request, res: Response) => {
    let newFlight = req.body;
    console.log("nnn", newFlight)
    return SearchFlight = newFlight;
    //   return res.status(200).json(flightData);
});




// --------------find flight base on search------------------

app.get('/flight/search', (req: Request, res: Response) => {
    //  const data= SearchFlight[0]
    const { arrivalDestination, arriveAt, depatureAt, depatureDestination }: any = SearchFlight

    const searchData = flightData.filter((flight) =>

        flight.arrivalDestination == arrivalDestination && flight.depatureDestination == depatureDestination

        // && (flight.itineraries[index].depatureAt).substring(0, 10) == depatureAt
    )

    // const search = searchData.filter((f, i) =>
    //     f.itineraries[i].depatureAt.substring(0, 10) == depatureAt
    // )
    // console.log("aaa", searchData.length)
    // console.log("bbb", search)

    return res.status(200).json(searchData);
});
















// -------------------Port--------------------------



app.listen(port, (): void => {
    console.log(`App listening on port : ${port}`)
})