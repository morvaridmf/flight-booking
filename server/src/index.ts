import express , { Request, Response, Application } from "express"
import flightData from "./data"
const cors = require('cors')



const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(cors({credentials: true}))

// app.get('/flight/test', (req: Request, res: Response) => {
//   return res.status(200).json({ test: 'is working' });
// });

app.get('/flight', (req: Request, res: Response) => {
  return res.status(200).json(flightData);
});








app.listen(port, ():void=>{
    console.log(`App listening on port : ${port}`)
})