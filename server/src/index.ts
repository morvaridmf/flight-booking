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
let SearchSelectedFlight: any = []
let passengerInfo: any = []



// -----------------search new flight-----------------------

app.post('/flight', (req: Request, res: Response) => {
    let newFlight = req.body;
    console.log("ff", newFlight)
    return SearchFlight.unshift(newFlight)
    //   return res.status(200).json(flightData);
});

// ----------------- selected flight-----------------------

app.post('/flights', (req: Request, res: Response) => {
    let newSelectedFlight = req.body;
    console.log("cc", newSelectedFlight)
    return SearchSelectedFlight.unshift(newSelectedFlight)
    //   return res.status(200).json(flightData);
});


// -----------------get passenger data-----------------------

app.post('/passenger', (req: Request, res: Response) => {
    let newPssenger = req.body;
    console.log("pp", newPssenger)
    return passengerInfo.unshift(newPssenger)
    //    return res.status(200).json(flightData);
});








// --------------find flight base on search------------------

app.get('/flight/search', (req: Request, res: Response) => {
    setTimeout(() => {

        const data = SearchFlight[0]
        console.log("llll", data)
        const { arrivalDestination, arriveAt, depatureAt, depatureDestination }: any = data
        const searchData = flightData.filter((flight, index) =>

            flight.arrivalDestination == arrivalDestination && flight.depatureDestination == depatureDestination

            // && (flight.itineraries[index].depatureAt).substring(0, 10) == depatureAt
        )

        // const search = searchData[0].itineraries.filter((f, i) =>
        //     f.depatureAt.substring(0, 10) == depatureAt
        // )


        return res.status(200).json(searchData);
    }, 1000);
});


// --------------find flight base on search------------------

app.get('/passenger/search', (req: Request, res: Response) => {

    setTimeout(() => {

        const passenger = passengerInfo[0]
        const flightDetail = SearchSelectedFlight[0]
        const search = SearchFlight[0]
        let combinedInfo: any[] = []
        // const mori = combinedInfo.concat(passenger, flightDetail, search)
        const mori = Object.assign(passenger, flightDetail, search)
        combinedInfo.push(mori)

        console.log("tttt", flightDetail)
        console.log("eeee", search)
        console.log("hhhhh", combinedInfo)


        return res.status(200).json(combinedInfo);
    }, 1000);


});














// -------------------Port--------------------------



app.listen(port, (): void => {
    console.log(`App listening on port : ${port}`)
})