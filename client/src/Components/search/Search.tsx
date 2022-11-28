import React,{useState,useEffect} from 'react'
import "./search.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import { Iflight } from "../types/Types"

interface Iflight {
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

};

interface Ideparture {
   depatureDestination: string;
}

function Search ()  {
  const [flights, setFlights] = useState<Iflight[]>([])
//   const [departure, setDeparture] = useState<Ideparture[]>([])
 const [departureTime, setDepartureTime] = useState(new Date())
 const [arrivalTime, setArrivalTime] = useState(new Date())

  useEffect(() => {
    const fetching = async () =>{
        const response = await fetch ("http://localhost:5000/flight")
        const data = await response.json()
        console.log(data)
         setFlights(data)
    }
    fetching();
  }, [])
  
//   const changeHandle = (e:React.ChangeEvent<HTMLInputElement>) =>{
//     e.preventDefault()
//     const newValue = e.target.value;
//     const newFilter = flights.filter(flight=>{
//         return flight.depatureDestination.toLowerCase().includes(newValue)

//     })
//     setDeparture(newFilter)

//   }



  return (
    <div className='search'>
        <h1>Book your flight</h1>
        <form>
          <div className='search-airport'>
             <div className='search-airport--trip'>
               <label>Trip</label>
                <select id="trip" name="trip">
                    <option value="" selected disabled hidden>Choose your trip</option>
                    <option value="round-trip">Round trip</option>
                    <option value="one-Way">One way</option>
                </select>
             </div>

             {/* <div className='search-airport--departure'>
               <label>Departs from</label>
                <input type="text" onChange={changeHandle} placeholder="choose your departure airport"/>
                    {departure.map(flight=>(
                        <ul >
                            <li value={flight.depatureDestination}>{flight.depatureDestination}</li>
                        </ul>
                    ))}
             </div> */}
             <div className='search-airport--departure'>
               <label>Departs from</label>
               <select id="departure" name="departure">
                     {flights.map(flight=>(
                        <option value={flight.depatureDestination}>{flight.depatureDestination}</option>
                    ))}
                </select>
             </div>

               <div className='search-airport--arrival'>
               <label>Arriving at</label>
                <select id="arriving" name="arriving">
                     {flights.map(flight=>(
                        <option value={flight.arrivalDestination}>{flight.arrivalDestination}</option>
                    ))}
                </select>
             </div>
            
            </div>
            <div className='search-date'>
                <div className='search-date--departure'>
                    <label>Date of departure</label>
                     <DatePicker selected={departureTime}
                     onChange={(date:any)=> setDepartureTime(date)}
                     dateFormat="yyyy-MM-dd"
                     filterDate={date=> date.getFullYear() !== 2022-12-12 &&  date.getFullYear() !== 2022-12-18 }
                     />
                </div>

                 <div className='search-date--arrival'>
                    <label>Date of arrival</label>
                    <DatePicker selected={arrivalTime}
                     onChange={(date:any)=> setArrivalTime(date)}
                     dateFormat="yyyy-MM-dd"
                     filterDate={date=> date.getFullYear() !== 2022-12-12 &&  date.getFullYear() !== 2022-12-18 }
                     />
                </div>

                 <div className='search-date--departure'>
                    <label>Passenger</label>
                    <input type="text"/>
                </div>

            </div>
            <div className='search-button'>
                <button>Search</button>

            </div>

        </form>
        
    </div>
  )
}

export default Search
